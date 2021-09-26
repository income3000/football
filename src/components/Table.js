import React from 'react'
import './Table.css'
export default function Table() {


    const selectTeam = (e) => {
        e.preventDefault();
      console.log(`clicked + #{id}`)
    
    }
    const _handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
     <div className="container ">
  <div className="row g-2">
    <div className="col-6">
    {/* <button type="checkbox">colts</button> */}
      <div className="p-3 border bg-light" id="1" onClick={selectTeam}>Colts</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="2"onClick={selectTeam}>Titans</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="3"onClick={selectTeam}>Falcons</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="4"onClick={selectTeam}>Giants</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="5"onClick={selectTeam}>Chargers</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="6"onClick={selectTeam}>Chiefs</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="7"onClick={selectTeam}>Bengals</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="8"onClick={selectTeam}>Steelers</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="9"onClick={selectTeam}>Bears</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="10"onClick={selectTeam}>Browns</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="11"onClick={selectTeam}>Ravens</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light"id="12"onClick={selectTeam}>Lions</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="13"onClick={selectTeam}>Saints</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="14"onClick={selectTeam}>Patriots</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="15"onClick={selectTeam}>Cardinals</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="16"onClick={selectTeam}>Jaguars</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="17"onClick={selectTeam}>Washington</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="18"onClick={selectTeam}>Bills</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="19"onClick={selectTeam}>Jets</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="20"onClick={selectTeam}>Broncos</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="21"onClick={selectTeam}>Dolphins</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="22"onClick={selectTeam}>Raiders</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="23"onClick={selectTeam}>Seahawks</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="24"onClick={selectTeam}>Vikings</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="25"onClick={selectTeam}>Buccaneers</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="26"onClick={selectTeam}>Rams</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="27"onClick={selectTeam}>Packers</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="28"onClick={selectTeam}>49ers</div>
    </div>
    <h2>Monday Night</h2>
    <div className="col-6">
      <div className="p-3 border bg-light" id="29"onClick={selectTeam}>Eagles</div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light" id="30"onClick={selectTeam}>Cowboys</div>
    </div>
  </div>
 
</div>
<button type="submit" onClick={_handleSubmit}>SUBMIT</button>
<br />

        </div>
    )
}
