"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
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
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  careerOption: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  subscribe: z.boolean().default(false),
  getTips: z.boolean().default(false),
  sellCreation: z.boolean().default(false),
  loanFacility: z.boolean().default(false),
});

interface ContactFormProps {
  selectedCareer: string | null;
  onClose: () => void;
}

export default function ContactForm({
  selectedCareer,
  onClose,
}: ContactFormProps) {
  const [isExpanded, setIsExpanded] = useState(!!selectedCareer);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState<
    "initial" | "submitted"
  >("initial");

  const formHeaderRef = useRef<HTMLHeadingElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      careerOption: selectedCareer || "",
      message: "",
      subscribe: false,
      getTips: false,
      sellCreation: false,
      loanFacility: false,
    },
  });

  useEffect(() => {
    if (isExpanded && formHeaderRef.current && formSectionRef.current) {
      // Focus the form header
      formHeaderRef.current.focus();

      // Scroll to the form section with smooth animation
      formSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isExpanded]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmissionStatus("initial");

    try {
      // Simulate progress updates
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 1000);

      // Simulate form submission
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to submit enrollment");

      clearInterval(interval);
      setProgress(100);
      console.log(values);
      setSubmissionStatus("submitted");
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmissionStatus("initial");
    } finally {
      setIsSubmitting(false);
      setProgress(0);
      form.reset();
      setIsExpanded(false);
      onClose();
      toast.success("Contact Details Submitted Successfully!", {
        description: `You have successfully contacted for ${selectedCareer}, Admin Will Connect Shortly, Stay Tuned`,
      });
    }
  }

  const clearCareerOption = () => {
    form.setValue("careerOption", "");
  };

  return (
    <section ref={formSectionRef} className="py-20  backdrop-blur-sm">
      <div className="flex justify-center items-center min-h-[100px] p-4">
        {!isExpanded ? (
          <Button
            variant="default"
            className="flex ml-2 text-lg px-8 py-6 font-semibold justify-start items-center gap-1 text-[#221F39] bg-[#F0C38E] hover:text-[#F0C38E]"
            size="lg"
            onClick={() => setIsExpanded(true)}
          >
            {submissionStatus === "submitted"
              ? "Thanks for Contacting us"
              : "Maybe There is another Reason"}
          </Button>
        ) : (
          <motion.div
            className="text-left bg-black/50  rounded-md backdrop-blur-sm "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <CardHeader>
              <CardTitle
                ref={formHeaderRef}
                tabIndex={-1}
                className="text-xl flex flex-row justify-between items-center  font-semibold text-[#F0C38E] outline-none"
              >
                Contact Form
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 text-[#F0C38E] hover:text-white hover:bg-[#9370DB]/20"
                >
                  <X size={18} />
                </Button>
              </CardTitle>
              <CardDescription className="text-gray-400 font-semibold text-md">
                Fill out the form below to get in touch with us.
                <p className="inline text-[#F0C38E]">
                  (Cancel or Submit existing form before creating another)
                </p>
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
                            className="bg-black/50 border-[#9370DB]/50 text-white"
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
                            className="bg-black/50 border-[#9370DB]/50 text-white"
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
                            className="bg-black/50 border-[#9370DB]/50 text-white"
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="careerOption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#F0C38E] font-semibold text-md">
                          Career Option
                        </FormLabel>
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Input
                              placeholder="Enter career option"
                              {...field}
                              disabled={!!selectedCareer}
                              className="bg-black/50 border-[#9370DB]/50 text-white"
                            />
                          </FormControl>
                          {!selectedCareer && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={clearCareerOption}
                              className="text-[#F0C38E] border-[#F0C38E]"
                            >
                              Maybe for another reason
                            </Button>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#F0C38E] font-semibold text-md">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your message"
                            {...field}
                            className="bg-black/50 border-[#9370DB]/50 text-white min-h-[100px]"
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
                        <FormItem className="flex flex-row gap-4 items-center justify-between rounded-lg focus:border-[#9370DB]/50 border-[#F0C38E] p-3">
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
                              className={`${field.value ? "bg-[#9370DB]" : "bg-[#F0C38E]"} transition-all duration-300`}
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
                        <FormItem className="flex flex-row gap-4  items-center justify-between rounded-lg focus:border-[#9370DB]/50 border-[#F0C38E] p-3">
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
                        <FormItem className="flex flex-row gap-4  items-center justify-between rounded-lg focus:border-[#9370DB]/50 border-[#F0C38E] p-3">
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

                    <FormField
                      control={form.control}
                      name="loanFacility"
                      render={({ field }) => (
                        <FormItem className="flex flex-row gap-4  items-center justify-between rounded-lg focus:border-[#9370DB]/50 border-[#F0C38E] p-3">
                          <div className="space-y-1">
                            <FormLabel className="text-[#F0C38E] font-semibold text-md">
                              Loan Facility
                            </FormLabel>
                            <FormDescription className="font-semibold text-sm">
                              Get access to flexible loan facilities under
                              <strong className="text-[#F0C38E]">
                                {" "}
                                MSME Guidance{" "}
                              </strong>{" "}
                              with easy repayment options. Apply now.
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
                        onClick={onClose}
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
