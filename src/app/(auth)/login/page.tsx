import LoginForm from "@/components/LoginForm";
import LoginGithub from "@/components/LoginGithub";
import Link from "next/link";
import {login, signup} from "@/app/login/actions";

export default function LoginPage() {
    return (
        <>
            <div className="w-full flex mt-20 justify-center">
                <section className="flex flex-col w-[400px]">
                    <h1 className="text-3xl w-full text-center font-bold mb-6">
                        Sign in
                    </h1>
                    <LoginForm />
                    <LoginGithub />
                    <div className="mt-2 flex items-center">
                        <h1>{`Don't have an account?`}</h1>
                        <Link className="font-bold ml-2" href="/register">
                            Sign Up
                        </Link>
                    </div>
                    <div className="mt-2 flex items-center">
                        <h1>{`Forgot your password?`}</h1>
                        <Link className="font-bold ml-2" href="/forgot-password">
                            Reset Password
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}

return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <form
            className="w-full max-w-md p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md flex flex-col gap-6 bg-white dark:bg-black">
            <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                Inicia sesión en X
            </h1>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400">
                    Correo electrónico
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#16181C] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="nombre@ejemplo.com"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#16181C] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="••••••••"
                />
            </div>

            <button
                className="text-white items-center justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 cursor-pointer focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                formAction={login}
            >
                <svg className="w-4 h-4 me-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"/>
                </svg>
                Login with Github
            </button>

            <button
                formAction={signup}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-full transition"
            >
                Crear cuenta
            </button>
        </form>
    </div>
);