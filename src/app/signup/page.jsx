"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
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
import { useRouter } from "next/navigation";

import { FaGoogle } from "react-icons/fa";


export default function SignUpPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({name, image, email, password});

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push("/");
    }
    // console.log({data, error});
  };


  const handleGoogleSignIn = async() =>{
    await authClient.signIn.social({
        provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-25 text-black ">
      <h1 className="text-center text-2xl  font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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

        <div className="flex gap-2">
          <Button
            type="submit"
            className={
              "w-full rounded-lg bg-[#080431] hover:shadow-sm hover:shadow-blue-600 hover:scale-[1.02]"
            }
          >
            <Check />
            Sign Up
          </Button>
        </div>
        <div className="flex items-center gap-3 my-4">
          <Separator className="flex-1 bg-gray-300 h-[1px]" />
          <span className="text-gray-400 text-xs uppercase">Or</span>
          <Separator className="flex-1 bg-gray-300 h-[1px]" />
        </div>
      </Form>
      <Button onClick={handleGoogleSignIn} className={"w-full gap-3 border-gray-500 rounded-full"} variant="outline">
        <FaGoogle />
        <p className="text-gray-700 font-bold">Continue With Google</p>
      </Button>
       <div className="flex justify-center items-center gap-2 mt-2">
        <p className="text-muted">Already have an account?</p>
        <Link href={"/signin"} className="text-red-700 font-medium">SignIn here</Link>
      </div>
    
    </Card>
  );
}
