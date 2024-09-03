"use client";

import { getLoggedInUser } from "@/app/lib/server/appwrite";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { redirect } from "next/navigation";

type formValues = {
  email: string;
  password: string;
};

const BackendLogin = async() => {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
  } = useForm<formValues>();

  const user = await getLoggedInUser();

  console.log(user)

  // if (!user) redirect("/signup");

  // redirect("/account");

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <section className={cn("bg-gray-50 dark:bg-gray-900")}>
        <div
          className={cn(
            "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
          )}
        >
          <div
            className={cn(
              "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            )}
          >
            <div className={cn("p-6 space-y-4 md:space-y-6 sm:p-8")}>
              <h1
                className={cn(
                  "text-xl font-bold leading-tight tracking-tight text-white"
                )}
              >
                Sign in to your account
              </h1>

              <div className={cn("loginFormCotainer")}>
                <form onSubmit={onSubmit}>
                  <div className="formGrid grid gap-y-3">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="email"
                          {...register("email")}
                          {...field}
                          className={{
                            inputClassName:
                              "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            labelClassName:
                              "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                          }}
                          placeholder="Enter your Email"
                          label="Email"
                          htmlFor="email"
                          required={true}
                        />
                      )}
                    />
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="password"
                          {...register("password")}
                          {...field}
                          className={{
                            inputClassName:
                              "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            labelClassName:
                              "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                          }}
                          placeholder="Enter your Password"
                          label="Password"
                          htmlFor="password"
                          required={true}
                        />
                      )}
                    />
                    <Button
                      type="submit"
                      value="Submit"
                      className={cn(
                        "w-full cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-blue-700 focus:ring-primary-800"
                      )}
                      name="submit"
                    />
                  </div>
                </form>

                <p className="text-sm font-light mt-6 text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BackendLogin;
