import React, {useEffect, useState} from 'react'
import db from './firebase'
import CopyText from './CopyText';
import {
    collection,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

const tinyid = require('tiny-unique-id')

function Input() {
    const [input, setInput] = useState('')
    const [shorten, setShorten] = useState('')
    
    const handleDb = async() => {
        const slug = tinyid.unique()

        await db.collection('urls').add({
            slug: slug,
            url: input,
        })

        setShorten(`${window.location.origin}/${slug}`)
        setInput(' ')
     
        console.log(shorten)
        console.log(input)
        console.log("maruf Mobin")
    }
    // console.log("firebase Db Data",db);
    const getAllUrls = collection(db, "urls")
    // useEffect(()=>{
    //         const getUrls = async () =>{
    //                 const data = await getDocs(getAllUrls)
    //                 console.log(data)
    //         }
    //         getUrls();
    // }, [])
    const [ manageDelete, setManageDelete ] = useState(false)
    const handleShortButton = async (id) => {
        const userDoc = doc(db, "urls", id);
        await deleteDoc(userDoc);
        setManageDelete(!manageDelete)
      };
      const [ users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(getAllUrls);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            const docRef = doc(db, "urls");
            const docSnap = await getDoc(docRef);
            setUsers(docSnap)
        };      
        getUsers();                                                
    },[shorten,manageDelete] );
    // console.log(users)
    let url = window.location.href;
    return (
        <div className='container parent-container'>
            <h1 className='mt-5 text-center'><span className='short-dec'>#</span>URL <span className='short-dec'>Shortener</span></h1>
            <center>
            <div className='mt-4'>
                <input type="text" disabled className='form-control' value={shorten}/>
                <input type="url" value={input} onChange={e=> setInput(e.target.value)} className='form-control mt-3'placeholder='Enter URL'/>
                <button onClick={handleDb} className='btn btn-dark mt-3'>Shorten URL</button>
            </div>
            </center>
            <table className="table table-borderd table-bordered table-responsive mt-5 text-white">
                <thead>
                        <tr>
                        <th scope="col">#SL.</th>
                        <th scope="col">Original Link</th>
                        <th scope="col">Short Link</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            {
                                users.map(( item, index )=> <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item?.url}</td>
                                    <td> <CopyText text={`${url}${item.slug}`} /> </td>
                                    <td><button onClick={ () => handleShortButton(item.id)} className="dtn btn-danger rounded-2">Delete</button></td>
                                    </tr>)
                            }
                </tbody>
            </table>
        </div>
    )
}

export default Input
