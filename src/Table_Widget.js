import React from "react";
import Popup from 'reactjs-popup';
import './Table_Widget.css';


const files = [
{id:1, selected : false, name: 'file1.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file1.txt', status: 'available'}, 
{id:2, selected : false, name: 'file2.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file2.txt', status: 'unavailable'}, 
{id:3, selected : false, name: 'file3.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file3.txt', status: 'available'},
{id:4, selected : false, name: 'file1.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file1.txt', status: 'available'}, 
{id:5, selected : false, name: 'file2.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file2.txt', status: 'unavailable'}, 
{id:6, selected : false, name: 'file3.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file3.txt', status: 'available'},
{id:7, selected : false, name: 'file1.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file1.txt', status: 'available'}, 
{id:8, selected : false, name: 'file2.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file2.txt', status: 'unavailable'}, 
{id:9, selected : false, name: 'file3.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file3.txt', status: 'available'},
{id:10, selected : false, name: 'file1.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file1.txt', status: 'available'}, 
{id:11, selected : false, name: 'file2.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file2.txt', status: 'unavailable'}, 
{id:12, selected : false, name: 'file3.txt', path: '\\Folder\\SubFolder\\Subfolder2\\ file3.txt', status: 'available'} 
]

class TableComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        Files : files,
        SelectedLength : 0,
        }
    }
    onFileClick(item)
    {
        let templist = this.state.Files;
        templist.map((file) => {
            if(file.id === item.id) {
                file.selected = !file.selected;
            }
          //  console.log(file)
            return file;

        })
          this.setState({Files : templist})
          console.log(this.state.Files.filter((e) => e.selected))
           
           var selectedFiles = this.state.Files.filter((e) => e.selected)
           console.log(selectedFiles)
           this.setState({SelectedLength : selectedFiles.length},length)
           function length() {
           console.log(this.state.SelectedLength)
           }
           
    }
   

    render() {
        return (
            <div>
                <div className="table-scroll">
                
                        <table className="table" >
                            <thead>
                                <tr> 
                                    <th scope = "col">

                                    </th>
                                    <th scope = "col">File name</th>
                                    <th scope = "col">File Path</th>
                                    <th scope = "col">Status</th>
                             
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Files.map((file) => (
                             <tr>
                                 <th scope = "row">
                                     {file.status == 'available' ? <div> <input type = "checkbox"
                                    className = "form-check-input"
                                     onChange={() => {this.onFileClick(file); 
                                     // this.getSelectedFiles()
                                    }}
                                /> </div> : null}
                                 </th>
                                 <td>{file.name}</td>
                                 <td>{file.path}</td>
                                 <td>{file.status}</td>
                             </tr>

                            ))}
                           </tbody>
                        </table>
                          
                </div>

                <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        {this.state.SelectedLength == 2 ?<div> <button className="btn btn-primary"
                        >
                            Launch Differences
                        </button>
                        
                         </div> : <div> <button className="btn btn-primary" disabled>
                            Launch Differences
                        </button> </div>}  
                    
                </div>
        )
    }
}

export default TableComponent;