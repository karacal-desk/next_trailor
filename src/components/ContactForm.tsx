"use client";

import { CardFooter } from "@/components/ui/card";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subscribe: z.boolean().default(false),
  getTips: z.boolean().default(false),
  sellCreation: z.boolean().default(false),
});

export default function ContactForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState<
    "initial" | "submitted"
  >("initial");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subscribe: false,
      getTips: false,
      sellCreation: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate form submission
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      console.log(values);
      setSubmissionStatus("submitted");

      setTimeout(() => {
        setIsSubmitting(false);
        setProgress(0);
        form.reset();
        setIsExpanded(false);
      }, 500);
    }, 2000);
  }

  return (
    <section className="py-20 bg-[#111213] backdrop-blur-sm">
      <div className="flex  justify-center items-center min-h-[100px] p-4">
        {!isExpanded ? (
          <Button
            variant="default"
            className="flex ml-2 text-lg px-8 py-6 font-semibold justify-start items-center gap-1 text-[#221F39]  bg-[#F0C38E] hover:text-[#F0C38E]"
            size="lg"
            onClick={() => setIsExpanded(true)}
          >
            {submissionStatus === "submitted"
              ? "Thanks for Contacting us"
              : "Maybe There is another Reason"}
          </Button>
        ) : (
          <motion.div
            className=" text-left bg-black/50 shadow-inner shadow-[#F0C38E]/70 rounded-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2 * 0.1, duration: 0.6 }}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[#F0C38E] outline-none">
                Contact Form
              </CardTitle>
              <CardDescription className="text-gray-400 font-semibold text-md">
                Fill out the form below to get in touch with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#F0C38E] font-semibold text-md">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            {...field}
                            className="bg-black/50 border-[#9370DB]/50  text-white "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#F0C38E] font-semibold text-md">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                            className="bg-black/50 border-[#9370DB]/50  text-white "
                          />
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
                        <FormLabel className="text-[#F0C38E] font-semibold text-md">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-black/50 border-[#9370DB]/50  text-white "
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 pt-2">
                    <FormField
                      control={form.control}
                      name="subscribe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg focus:border-[#9370DB]/50  border-[#F0C38E] p-3">
                          <div className="space-y-0.5">
                            <FormLabel className="text-[#F0C38E] font-semibold text-md">
                              Register/Subscribe
                            </FormLabel>
                            <FormDescription className="font-semibold text-sm">
                              Receive updates about our services
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              className={`${
                                field.value ? "bg-[#9370DB]" : "bg-[#F0C38E]"
                              } transition-all duration-300`}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="getTips"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg focus:border-[#9370DB]/50  border-[#F0C38E] p-3">
                          <div className="space-y-0.5">
                            <FormLabel className="text-[#F0C38E] font-semibold text-md">
                              Get Help with Tips
                            </FormLabel>
                            <FormDescription className="font-semibold text-sm">
                              Receive helpful tips and guidance
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sellCreation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg focus:border-[#9370DB]/50  border-[#F0C38E] p-3">
                          <div className="space-y-0.5">
                            <FormLabel className="text-[#F0C38E] font-semibold text-md">
                              Sell Your Creation
                            </FormLabel>
                            <FormDescription className="font-semibold text-sm">
                              Get help selling your products
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <CardFooter className="flex flex-col gap-4 px-0">
                    <Button
                      variant={"outline"}
                      type="submit"
                      className="text-md font-semibold w-full bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>

                    {isSubmitting && (
                      <div className="w-full">
                        <Progress
                          value={progress}
                          className={`h-2 transition-all duration-300 ${
                            progress < 50
                              ? "bg-[#F0C38E] shadow-[#F0C38E]"
                              : "bg-[#9370DB] shadow-[#9370DB]"
                          } shadow-lg`}
                        />
                      </div>
                    )}

                    {!isSubmitting && (
                      <Button
                        variant="outline"
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="text-md font-semibold w-full bg-[#F0C38E]/10 text-white border-[#F0C38E] hover:text-[#F0C38E] shadow-lg shadow-[#F0C38E]/30 transition-all duration-300"
                      >
                        Cancel
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </motion.div>
        )}
      </div>
    </section>
  );
}
