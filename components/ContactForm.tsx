  "use client";

import React from "react";
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

const FormSchema = z.object({
  name: z.string().nonempty({message: "Please enter your name"}),
  email: z.string().email(),
  telephone: z.string().nonempty({message: "Please enter your telephone number"}),
  message: z.string().nonempty({message: "Message should not be empty"}).min(2, {message: "Message should be at least 2 characters"}), 
});

type Props = {};

const ContactForm = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "Hello",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5 mt-10">
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
        <Button type="submit" className="translate-y-[-70%] bg-gradient-to-r from-secondary-100 to-secondary-200">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
