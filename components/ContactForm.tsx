"use client";

import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { CircularProgress } from "@nextui-org/react";
import { HOST } from "@/host";
import { FaLaughWink, FaRegHandshake, FaSadTear } from "react-icons/fa";
import {} from "react-icons/hi";
import {} from "react-icons/hi2";

const FormSchema = z.object({
  name: z.string().nonempty({ message: "Please enter your name" }),
  email: z.string().email(),
  telephone: z
    .string()
    .nonempty({ message: "Please enter your telephone number" }),
  message: z
    .string()
    .nonempty({ message: "Message should not be empty" })
    .min(2, { message: "Message should be at least 2 characters" }),
});

type Props = {};

const ContactForm = (props: Props) => {
  useEffect(() => {
    setIsSubmitting(false);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleIsSubmitting = () => {
    setIsSubmitting(true);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "Hi there! I'd love to chat about a project.",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setIsSubmitting(true);
      const res = await fetch(`${HOST}/api/messages/`, {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast("Couldn't send message", {
          icon: <FaSadTear className="text-red-400" />,
        });
        setIsSubmitting(false);
        throw new Error(`Request failed with status ${res.status}`);
      }

      await res.json();
      toast("Thank you for reaching out", {
        icon: <FaRegHandshake className="text-yellow-400" />,
      });
      setIsSubmitting(false);
      form.reset();
    } catch (error) {
      toast("An error occurred", {
        icon: <FaSadTear className="text-red-400" />,
      });
      setIsSubmitting(false);
      console.error("An error occurred:", error);
      return { error: "An error occurred" };
    }
  };
  return (
    <>
      <Toaster position="bottom-center" toastOptions={{duration: 5000}} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-5 mt-10 sm:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telephone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your telephone number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="name@email.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-10 flex gap-5 bg-gradient-to-r from-secondary-100 to-secondary-200 lg:mt-0 lg:translate-y-[-70%]"
          >
            <CircularProgress
              size="sm"
              color="primary"
              className={`w-5 text-white ${
                isSubmitting ? "inline-flex" : "hidden"
              }`}
              aria-label="Loading..."
            />
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
