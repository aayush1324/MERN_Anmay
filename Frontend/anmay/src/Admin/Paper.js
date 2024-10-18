import React, { useState } from 'react';
import axios from 'axios';

function Paper(props) {
    
    const [formData, setFormData] = useState({
        exam: '',
        class: '',
        year: '',
        medium: '',
        paper: '',
        subject: '',
        paperFile: null, // File input
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            paperFile: e.target.files[0] // Capture the file
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const paperData = new FormData();
        paperData.append('exam', formData.exam);
        paperData.append('class', formData.class);
        paperData.append('year', formData.year);
        paperData.append('medium', formData.medium);
        paperData.append('paper', formData.paper);
        paperData.append('subject', formData.subject);
        paperData.append('paperFile', formData.paperFile); // Append the file

        try {
            const response = await axios.post('http://localhost:5000/upload-paper', paperData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Paper uploaded successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to upload paper');
        }
    };

    return (
        <div className="d-flex justify-content-center my-5">
            <br />
            <br />

            <form className="d-flex flex-column w-50 border px-5" onSubmit={handleSubmit}>

                <br />
                
                <h1 className="d-flex justify-content-center  ">Paper Upload</h1>

                <br />

                <div className="form-floating">
                    <select className="form-select" id="floatingSelect"  name="exam" onChange={handleChange} aria-label="Floating label select example">
                        <option selected>Select Exam </option>
                        <option value="Jee">JEE</option>
                        <option value="Neet">NEET</option>
                        <option value="Mains">MAINS</option>
                    </select>
                    <label for="floatingSelect">Exam</label>
                </div>

                <br />

                <div className="form-floating">
                    <select className="form-select" id="floatingSelect"  name="class" onChange={handleChange} aria-label="Floating label select example">
                        <option selected>Select Class </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label for="floatingSelect">Class</label>
                </div>

                <br />

                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" name="year" onChange={handleChange} aria-label="Floating label select example">
                        <option selected>Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                    <label for="floatingSelect">Year</label>
                </div>

                <br />

                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" name="medium" onChange={handleChange} aria-label="Floating label select example">
                        <option selected>Select Medium</option>
                        <option value="English">English </option>
                        <option value="Hindi">Hindi </option>
                    </select>
                    <label for="floatingSelect">Medium</label>
                </div>

                <br />

                
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" name="paper" onChange={handleChange} aria-label="Floating label select example">
                        <option selected>Select Paper </option>
                        <option value="English">Paper-1</option>
                        <option value="Hindi">Paper-2</option>
                    </select>
                    <label for="floatingSelect">Paper </label>
                </div>

                <br />

                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" name="subject" onChange={handleChange} aria-label="Floating label select example">
                        <option selected>Select Subject</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Math">Math</option>
                        <option value="Biology">Biology</option>
                    </select>
                    <label for="floatingSelect">Subject</label>
                </div>

                <br />
                
                <div className="mb-3">
                    <div className="form-floating">
                        <input className="form-control" type="file" id="formFile" name="paperFile" onChange={handleFileChange} />
                        <label for="formFile">Paper Upload</label>
                    </div>
                </div>

                <br />
                
                <div className="d-flex justify-content-center align-items-center"> 
                    <button type="button" className="btn btn-danger w-25 me-5 p-2">Reset Paper</button>
                    <button type="button" className="btn btn-success w-25 ms-5 p-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit Paper</button>
                </div>

                <br />

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Paper Submit </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to upload the paper ?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-success">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
            <br />
        </div>
    );
}

export default Paper;