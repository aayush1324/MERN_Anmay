import React from 'react';
import TopNavbar from '../Navbar/TopNavbar';

function JEE(props) {
    <TopNavbar/>

    return (
        <div>

            <table class="table table-bordered" > 
                <thead class="table-light text-center">
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Medium</th>
                        <th scope="col">Paper</th>
                        <th scope="col">Physics</th>
                        <th scope="col">Chemistry</th>
                        <th scope="col">Math</th>                    
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row" rowSpan="4" class="align-middle text-center">2024</th>
                        <td rowSpan="2" class="align-middle text-center">English</td>
                        <td class="text-center">1</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                    </tr>               
                    <tr>
                        <td class="text-center"> 2</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                    </tr>               
                    <tr>
                        <td rowSpan="2" class="align-middle text-center">Hindi</td>
                        <td class="text-center">1</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                    </tr>               
                    <tr>
                        <td class="text-center">2</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                        <td class="text-center">View / Download</td>
                    </tr>               
                </tbody>
            </table>
        </div>
    );
}

export default JEE;