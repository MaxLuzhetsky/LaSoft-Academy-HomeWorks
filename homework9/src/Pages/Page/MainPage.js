import React from 'react'
import Header from "../Components/Header/Header"
import Main from "../Components/Main/Main"
import Footer from "../Components/Footer/Footer"

export default function MainPage() {
  
  fetch("http://localhost:5000/courses")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


  return (
    <>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </>
 );
}



