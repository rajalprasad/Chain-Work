import { useLocation } from "react-router-dom";
import { useState } from "react";
import { storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateDoc, doc, getFirestore } from "firebase/firestore";

export function JobSubmission() {

    const getJob = useLocation();
    const jobId = getJob.state.id;
    const jobDescription = getJob.state.Job_Description;
    const payInEth = getJob.state.Pay_in_Eth;

    const [progress, setProgress] = useState(0);

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    }

    const uploadFiles = (file) => {
        //
        if(!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
            }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    let docRef = doc(getFirestore(), 'Jobs', jobId)
                    updateDoc(docRef, {
                        File_URL: url,
                        Work_Uploaded: true,
                        Worker_Address: document.getElementById("worker-address").value
                    })
                    .then(() => {
                        console.log("Successful!");
                    })
                });

            }
        );   
    };

    return (
        <>
            <h1>Job ID: {jobId}</h1>
            <h1>Job Description: {jobDescription}</h1>
            <h1>Pay in Eth: {payInEth}</h1>
            <form onSubmit={formHandler}>
                <input type="file" className="input" />
                <label>Enter Eth Address</label>
                <input type="text" id="worker-address" />
                <button type="submit">Upload</button>
            </form>
            <h3>Uploading: {progress}%</h3>
        </>
    )
}