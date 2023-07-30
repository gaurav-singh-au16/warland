import React, { useState, useEffect } from 'react';
import axios from 'axios'


interface InviteFormProps {
    createdLink: string;
}
const InviteForm: React.FC<InviteFormProps> = ({ createdLink }) => {


    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [peopleList, setPeopleList] = useState<string[]>([]);

    const validateEmail = (email: string) => {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!createdLink){
            return setError('Generate Link First!');
        }

        if (!validateEmail(email)) {
            return setError('Invalid email format');
        } else {
            setError('');
            let data = {
                userEmail: email,
                gameUrl: createdLink,

            }
            axios.post('http://localhost:3000/api/share-url', data)
            .then(res => {
                if(res.data.success){
                    setMsg(res.data.data);
                    setTimeout(() => {
                        setMsg('');
                    }, 5000);
                }else{
                    setMsg(res.data.data);
                    setTimeout(() => {
                        setMsg('');
                    }, 5000);
                }
            })
            .catch(err => {
                setMsg('Server Error, Try Again!');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
            })

            
            setEmail('');
        }
    };

    const fetchAllPeople = () => {
        axios.get('http://localhost:3000/api/get-user')
      .then(res => {
        if(res.data.success){
            setPeopleList(res.data.data);
           
        }
      })
    }

    useEffect(() => {
        fetchAllPeople()
    }, [])
    

    const emailChecker = (val: any) => {
        setError('');
        setEmail(val)
    }
    // console.log(peopleList)

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mt-10 text-green-700 mb-6">{msg}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => emailChecker(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send Invitation
                    </button>
                </div>
            </form>
            <div className="border mt-8 p-4">
                <h2 className="text-lg font-bold mb-4">People List</h2>
                <ul>
                    {peopleList.map((dat: any, i) => (
                        <li key={i}>{i+1}. {dat.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InviteForm;
