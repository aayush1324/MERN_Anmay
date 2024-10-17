import React from 'react';

function Paper(props) {
    return (
        <div>
            <h1>Paper</h1>
            <br />
            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Select Exam </option>
                    <option value="Jee">JEE</option>
                    <option value="Neet">NEET</option>
                    <option value="Mains">MAINS</option>
                </select>
                <label for="floatingSelect">Exam</label>
            </div>

            <br />

            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Select Class </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label for="floatingSelect">Class</label>
            </div>

            <br />

            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
                <label for="floatingSelect">Year</label>
            </div>

            <br />

            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Select Medium</option>
                    <option value="English">English </option>
                    <option value="Hindi">Hindi </option>
                </select>
                <label for="floatingSelect">Medium</label>
            </div>

            <br />

            
            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Select Paper </option>
                    <option value="English">Paper-1</option>
                    <option value="Hindi">Paper-2</option>
                </select>
                <label for="floatingSelect">Paper </label>
            </div>

            <br />

            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
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
                    <input className="form-control" type="file" id="formFile" />
                    <label for="formFile">Paper Upload</label>
                </div>
            </div>

            <br />
            
            <div className="d-flex justify-content-center align-items-center"> 
                <button type="button" className="btn btn-danger w-25 me-5 p-2">Reset Paper</button>
                <button type="button" className="btn btn-success w-25 ms-5 p-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit Paper</button>
            </div>

            <br />
            <br />
            <br />

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Are you sure </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Please upload the paper
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-success">Save Chnages</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Paper;