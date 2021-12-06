import React from 'react'

const apiUrl = 'http://localhost:58605/api/students';

export default function FCFetchDemo() {

  const btnGetALL = () => {

    console.clear();

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].Name=', result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnGetId = () => {
    console.clear();

    fetch(apiUrl + '/2', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          //result.map(st => console.log(st.Name));
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnPost = () => {

    console.clear();

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: "77",
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Grade);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnDelete = () => {

    console.clear();

    fetch(apiUrl + '/2', {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
      },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnPut = () => {

    console.clear();

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: "3",
      Name: 'ben',
      Grade: 198
    };

    fetch(apiUrl + '/3', {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Grade);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');

  }

  return (
    <div>
      <button onClick={btnGetALL}>Get All</button>
      <button onClick={btnGetId}>Get Id</button>
      <button onClick={btnPost}>Post</button>
      <button onClick={btnDelete}>Delete</button>
      <button onClick={btnPut}>Put</button>
    </div>
  )
}
