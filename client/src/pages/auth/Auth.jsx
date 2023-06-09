import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register, login } from "../../features/auth/authSlice"
import { redirect } from 'react-router-dom'

const initialState = { name: "", email: "", password: "", role: "normal" }

export default function Register() {

    let message;
    let userInfo = null;

    const dispatch = useDispatch()
    const [switchMode, setSwitchMode] = useState(false)
    const [data, setData] = useState(initialState)

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
        console.log(data);
    }

    function clear() {
        setData(initialState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userInfo);
        try {
            if (switchMode) {
                dispatch((register(data.name, data.email, data.password, data.role)))
            } else if (!switchMode) {
                dispatch((login(data.email, data.password,)))
            }
        }
        catch (err) {
            throw new Error(err)
        }
        clear()
    }

    useEffect(() => {

        userInfo = JSON.parse(localStorage.getItem('userInfo'))

        if (userInfo) {
            console.log("you are logged in");
            redirect('/')
        }
        return () => {
            console.log('you are logged out');
        }

    }, [dispatch])

    const canSubmit = [data].every(Boolean) //&& data.password.length >= 6;

    return (
        <section className="mt-5 m-auto max-w-2xl p-8">
            {
                !userInfo &&

                <div className="m-auto max-w-2xl p-4">
                    <h2 className="text-2xl font-semibold">{switchMode ? "Create Account" : "Login"}</h2>
                    <small>{message}</small>
                    <form onSubmit={handleSubmit} className="py-6 gap-6 grid grid-cols-1" method="POST">
                        {
                            switchMode &&
                            <input className="input" type="text" name="name" onChange={handleChange} value={data.name} placeholder="Name*" required />
                        }
                        <input className="input" type="text" name="email" onChange={handleChange} value={data.email} placeholder="E-mail*" required />
                        <input className="input" type="password" name="password" onChange={handleChange} value={data.password} placeholder="Password*" required />
                        {
                            switchMode &&
                            <select value={data.role} onChange={handleChange} className="input rounded-md shadow-none" name="role" id="role">
                                <option name="normal" value="normal">User</option>
                                <option name="manager" value="manager">manager</option>
                                <option name="admin" value="admin">Admin</option>
                            </select>
                        }
                        <a onClick={() => setSwitchMode(!switchMode)} className="text-blue-500 underline cursor-pointer">{switchMode ? 'you have an account' : 'you dont have an account'}</a>
                        <div className="grid grid-cols-2 gap-4">
                            <button disabled={!canSubmit} className="btn mt-6" type="submit">{switchMode ? "Sign UP" : "Login"}</button>
                            <button onClick={clear} className="btn mt-6 bg-slate-600 hover:bg-slate-700" type="button">clear</button>
                        </div>
                    </form>
                </div>
            }
        </section>
    )
}
