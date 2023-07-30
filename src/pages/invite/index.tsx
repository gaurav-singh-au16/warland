import Head from 'next/head';
import InviteForm from '../../components/InviteForm';
import { useState } from 'react';
import axios from 'axios'

const Invite: React.FC = () => {

    const [createdLink, setCreatedLink] = useState('')
    const credateUrl = () => {
        axios.get('https://warland-backend.vercel.app/api/create-url')
        .then(res => {
            if(res.data.success){
                setCreatedLink(res.data.data)
            }
        })
    }

  return (
    <div>
      <Head>
        <title>Invite Name App</title>
        <meta name="description" content="Invite Name App with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg absolute left-4 top-4"
        onClick={credateUrl}
        >
          Create Link
        </button>
        <h1 className="text-2xl font-bold text-center mt-10 mb-6">Invite Game App</h1>
        <h1 className="text-2xl font-bold text-center mt-10 mb-6">{createdLink}</h1>
        <InviteForm createdLink={createdLink}/>
      </main>
    </div>
  );
};

export default Invite;
