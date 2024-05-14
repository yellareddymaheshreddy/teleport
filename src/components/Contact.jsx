import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Email from './Email';
import conf from '../conf/conf';


const Contact = () => {
    const btn = useRef();
    const email=useRef();
    const firstname=useRef();
    const message=useRef();
    let toastdesign = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    }
    const notifysuccess = (text) => toast.success(`${text} Message sent!`, toastdesign);
    const notifyfail = (text) => toast.error(`${text}!`, toastdesign);
    const form = useRef();

    const sendEmailtocustomer = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(conf.mailjsserviceid, conf.mailjstemplate, form.current, {
                publicKey: conf.mailjspublickey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.querySelectorAll("Input").forEach(input => {
                        input.value = ""
                    });
                    form.current.querySelector("textarea").value = ""
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

   


    const sendEmail = (e) => {
        e.preventDefault();
        // checking for empty fields and sending a fail toast
        let emptyfields=[];
        if(!firstname.current.value){
            emptyfields.push("First Name ")
        }if(!email.current.value){
            emptyfields.push("Email ")
        }if(!message.current.value){
            emptyfields.push("Message ")
        }
        if(emptyfields.length!=0){
            notifyfail(`Please Fill ${emptyfields.toString()}`);
            return
        }
        //changing the design of the send button after click
        const divs=btn.current.querySelector("div");
        btn.current.classList.remove("bg-black")
        btn.current.disabled=true
        divs.classList.remove("right-[-40px]", "opacity-0")
        divs.classList.add("right-0", "opacity-100")
        btn.current.querySelector("path").style.strokeDashoffset = "0"
        btn.current.querySelector("p").innerText="Message Sent!";

        let details = [];
        form.current.querySelectorAll("input").forEach(input => {
            details.push(input.value)
        });
        details.push(form.current.querySelector("textarea").value)

        Email.send({
            SecureToken: conf.SecureToken,
            To: conf.maheshmail,
            From: conf.maheshmail,
            Subject: `Teleport : ${details[0]} contacted You!`,
            Body: `<body style="margin: 0;padding: 0;">
            <div
                style="background-color: black; background-color: black;color: white; display: flex;
                flex-direction:column; align-items: center; justify-content: center; padding-block: 2rem; overflow-x: hidden;overflow-y: hidden; overflow: hidden;max-width: 100vw; ">
                <div style="min-width: 100vw;">
                    <p style="font-size: 2.25rem; line-height: 2.5rem;font-weight: 700;margin: 4vw;">
                        Hello <span style="color: purple;">Mahesh Reddy</span>,
                    </p>
                    <p style=" color: azure; margin: 4vw;">
                        You got a new message from <a href="https://maheshreddy.online/"
                            style=" color:aqua;;">Teleport</a> :
                    </p>
                    <hr style="margin: 4vw;">

                    <div style="margin: 8vw">
                        <div style=" display: grid; width: 270px; row-gap: 1rem">
                            <div>
                                <label style="font-size: 0.875rem; font-weight: 500;  color:gray;line-height: 24px;">
                                    First Name
                                </label>
                                <div
                                    style=" borderRadius: 0.375rem; border: 1px solid aliceblue;  padding: 0.5rem 0.75rem; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 0.875rem; line-height: 1.25rem">
                                    ${details[0]}
                                </div>
                            </div>
                            <div>
                                <label style="font-size: 0.875rem; font-weight: 500;  color:gray;line-height: 24px;">
                                    Last Name
                                </label>
                                <div
                                    style=" borderRadius: 0.375rem; border: 1px solid aliceblue;  padding: 0.5rem 0.75rem; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 0.875rem; line-height: 1.25rem">
                                    ${details[1]}
                                </div>
                            </div>
                            <div>
                                <label style="font-size: 0.875rem; font-weight: 500;  color:gray;line-height: 24px;">
                                    Email
                                </label>
                                <div
                                    style=" borderRadius: 0.375rem; border: 1px solid aliceblue;  padding: 0.5rem 0.75rem; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 0.875rem; line-height: 1.25rem">
                                    ${details[2]}
                                </div>
                            </div>
                            <div>
                                <label style="font-size: 0.875rem; font-weight: 500;  color:gray;line-height: 24px;">
                                    Phone
                                </label>
                                <div
                                    style=" borderRadius: 0.375rem; border: 1px solid aliceblue;  padding: 0.5rem 0.75rem; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 0.875rem; line-height: 1.25rem">
                                    ${details[3]}
                                </div>
                            </div>
                            <div>
                                <label style="font-size: 0.875rem; font-weight: 500;  color:gray;line-height: 24px;">
                                    Message
                                </label>
                                <div
                                    style=" borderRadius: 0.375rem; border: 1px solid aliceblue;  padding: 0.5rem 0.75rem; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 0.875rem; line-height: 1.25rem;min-height: 66px;">
                                    ${details[4]}
                                </div>
                            </div>
                        <button 
                            style="background-color: purple;border: none; borderRadius: 4px; padding: 8px; color: white; font-weight: 600;margin-top: 24px;"
                            >
                            <a href="https://maheshreddy.online/"
                                style=" color: inherit; text-decoration: inherit;">Visit
                                Website</a> </button>
                        </form>
                    </div>
                </div>
        </body>`
        }).then(
            message => {
                notifysuccess(message);
                form.current.querySelectorAll("Input").forEach(input => {
                    input.value=""
                });
                form.current.querySelector("textarea").value=""
                setTimeout(() => {
                   
                    btn.current.querySelector("p").innerText="Send Message";
                    btn.current.disabled = false;
                    btn.current.classList.add("bg-black")
                    divs.classList.add("right-[-40px]", "opacity-0")
                    divs.classList.remove("right-0", "opacity-100")
                    btn.current.querySelector("path").style.strokeDashoffset = "34"
                }, 5000);
            }

        ).catch(
            message => {
                notifyfail(message)
                
                btn.current.disabled=false;
                btn.current.classList.add("bg-blue-600")
                divs.classList.add("right-[-40px]", "opacity-0")
                divs.classList.remove("right-0", "opacity-100")
                btn.current.querySelector("path").style.strokeDashoffset = "34"
                btn.current.querySelector("p").innerText="ReSend Message";
            }
        );
    }
    return (

        <div>

            <div>
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
                        <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
                            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
                                Share your thoughts
                            </p>
                        </div>
                        <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                            Love to hear from you
                        </p>
                        <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
                            quam ratione placeat?
                        </p>
                    </div>
                    <div className="mx-auto max-w-7xl py-12 md:py-24">
                        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                            <div className="flex items-center justify-center">
                                <div className="px-2 md:px-12">
                                    <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                                        Get in touch
                                    </p>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Our friendly team would love to hear from you.
                                    </p>
                                    <form ref={form} onSubmit={(e) => {
                                        sendEmail(e);
                                        sendEmailtocustomer(e);
                                    }} className="mt-8 space-y-4">
                                        <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                            <div className="grid w-full  items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="first_name"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                    type="text"
                                                    id="first_name"
                                                    placeholder="First Name"
                                                    name='user_firstname'
                                                    ref={firstname}
                                                />
                                            </div>
                                            <div className="grid w-full  items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="last_name"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                    type="text"
                                                    id="last_name"
                                                    placeholder="Last Name"
                                                    name='user_lastname'
                                                />
                                            </div>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                id="email"
                                                placeholder="Email"
                                                name='user_email'
                                                ref={email}
                                            />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="phone_number"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="tel"
                                                id="phone_number"
                                                placeholder="Phone number"
                                                name='user_phone'
                                            />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                className="flex h-10 w-full rounded-md border text-black  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                id="message"
                                                placeholder="Leave us a message"
                                                cols="3"
                                                name='message'
                                                ref={message}
                                            ></textarea>
                                        </div>

                                        {/* <button id='animatebtn'
                                            type="\"
                                            value="send"
                                            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all duration-1000 disabled:bg-red-500"
                                        >
                                            <p >Send Message</p>

                                        </button> */}
                                        <div className='w-full flex justify-center items-center '>
                                            <button ref={btn} style={{  height: "60px", border: "none", outline: "none", color: "#fff", "font-size": "22px", "borderRadius": "40px", "text-align": "center", "boxShadow": " 0 6px 20px -5px rgba(0,0,0,0.4)", "position": "relative", "overflow": "hidden", "cursor": "pointer", transition: "1s" }} className='bg-black w-full disabled:bg-green-600 mt-8'>
                                                <p>Send Message</p>
                                                <div style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    "borderRadius": "40px",
                                                    "boxShadow": "0 0 12px -2px rgba(0,0,0,0.5)",
                                                    position: "absolute",
                                                    top: "0",
                                                    transition: "1s",
                                                }} className='right-[-40px] opacity-0 '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style={{
                                                        width: "40px",
                                                        margin: "10px"
                                                    }}>
                                                        <path className='delay-1000 transition-all' fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" style={{
                                                            "strokeWidth": 3,
                                                            stroke: " #fff",
                                                            "strokeDasharray": 34,
                                                            "strokeDashoffset": 34,
                                                            "strokeLinecap": "round",
                                                        }} />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <img
                                alt="Contact us"
                                className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=687&amp;h=800&amp;q=80"
                            />
                        </div>
                    </div>
                </div>
                <hr className="mt-6" />
            </div>
            <script src="https://smtpjs.com/v3/smtp.js"></script>

        </div>
    )
}

export default Contact
