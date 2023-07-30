import { useEffect, useState } from 'react';
import axios from 'axios';

const Game = () => {
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Code to extract the URL and save it to state
        const url = window.location.href;
        setUrl(url);
        saveUserFunction(url)
    }, []);

    const saveUserFunction = async (url: string) => {
        let data = {
            gameUrl: url,
            status: 1
        }
        axios.post('https://warland-backend.vercel.app/3000/api/join-game', data)
            .then(res => {
                if (res.data.success) {
                    setTimeout(() => {
                        return setMessage(res.data.data);
                    }, 1000);
                } else {
                    setTimeout(() => {
                        return setMessage(res.data.data);
                    }, 1000);
                }
            })
            .catch(err => {
                console.log(err)
                setTimeout(() => {
                    setMessage('SERVER ERROR, TRY AGAIN!');
                }, 1000);
                return err
            })
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-smoke-white">
            {message && (
                <div className="text-center font-bold">
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default Game;
