"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

 export  default  function SignInPage () {
  // const searchParams = useSearchParams()
  // const redirectPath = searchParams.get("redirect") || "/";
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({name, image, email, password});

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    toast.success("login successfully!");
    // console.log({ data, error });
  };

  // if (error) {
  //   toast.error(error.message || "Signup failed!");
  //   return;
  // }


  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto max-w-full md:w-125 py-10 mt-10 md:mt-25 text-black ">
      <h1 className="text-center text-2xl  font-bold">Sign In</h1>

      <Form className="flex md:w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex flex-col md:flex-row gap-2">
          <Button
            type="submit"
            className={
              "w-full rounded-lg bg-[#080431] hover:shadow-sm hover:shadow-blue-600 hover:scale-[1.02]"
            }
          >
            <Check />
            Sign In
          </Button>
          <Button
            className={
              "bg-white rounded-lg border text-red-700 hover:text-white hover:bg-red-700 hover:shadow-sm hover:shadow-red-200 hover:scale-[1.02]"
            }
          >
            Reset
          </Button>
        </div>
        <div className="flex items-center gap-3 my-4">
          <Separator className="flex-1 bg-gray-300 h-[1px]" />
          <span className="text-gray-400 text-xs uppercase">Or</span>
          <Separator className="flex-1 bg-gray-300 h-[1px]" />
        </div>
      </Form>
      <Button
        onClick={handleGoogleSignIn}
        className={"w-full gap-3 border-gray-500 rounded-full"}
        variant="outline"
      >
        <FaGoogle />
        <p className="text-gray-700 font-bold">Sign In With Google</p>
      </Button>
      <div className="flex justify-center items-center gap-2 mt-2">
        <p className="text-muted">Don't have an account?</p>
        <Link href={"/signup"} className="text-red-700 font-medium">SignUp here</Link>
      </div>
    </Card>
  );
}
