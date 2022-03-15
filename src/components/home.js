import { event } from 'jquery';
import React from 'react'

class Home extends React.Component {
    linkGithub(){
        const confirm = window.confirm("Link to Fawwaz's GitHub?");
        if (confirm == true) {
            window.open("https://github.com/fawwazalifiofarsa");
        }else{
            return false;
        }
    }
    render(){
        return (
            <div className="w-full mt-10 px-40">
                <div className="bg-white shadow-md rounded-lg px-8 pt-8 pb-8 mb-5">
                    <h1 className="text-center mb-5 text-2xl font-semibold">Selamat Datang !</h1>
                    <div className="mb-2 text-center justify-center  text-black text-lg font-semibold opacity-80 hover:opacity-100 duration-300">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='mx-auto mb-2 w-1/4 cursor-pointer' onClick={this.linkGithub}/>
                        <p className='mx-auto'>GitHub</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
