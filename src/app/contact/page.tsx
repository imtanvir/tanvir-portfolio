"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXTextArea from "@/src/components/form/FXTextArea";
import { useContactUs } from "@/src/hook/contact.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
const Contact = () => {
  const { mutate: handleFeedbackSend, isPending, isSuccess } = useContactUs();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleFeedbackSend(data);
  };
  const contactValidationSchema = z.object({
    email: z.string().trim().email("Please enter a valid email!"),
    message: z
      .string()
      .trim()
      .max(500, "Message must be less than 500 characters"),
  });

  const router = usePathname();

  return (
    <section className="overflow-hidden h-screen py-10">
      <div className="container mx-auto pt-5 px-5">
        <h1 className="font-Oswald font-bold text-6xl py-14 text-[#a3e635] inline-block">
          Contact With Me
        </h1>
        <p className="md:w-1/3">
          Do you have any project or you want a discussion? Here Iam waiting for
          you. Let's share your concern.
        </p>
        <span className=" text-[#a3e635] mt-5">Thank you!</span>
        <div className="md:w-1/2 mx-auto md:pt-24 pt-16">
          <div className="border border-[#a3e635] rounded-2xl p-8 box-content">
            <FXForm
              resolver={zodResolver(contactValidationSchema)}
              onSubmit={onSubmit}
            >
              <div className="flex flex-col mb-4">
                <FXInput
                  label="Email"
                  name="email"
                  type="email"
                  variant="flat"
                />
              </div>

              <div className="flex flex-col">
                <FXTextArea label="Feedback" name="message" variant="flat" />
              </div>
              <div className="mt-4">
                <Button
                  className="bg-gradient-to-r text-gray-900 font-google font-bold from-[#a3e635] to-lime-200 hover:from-[#a3e635]/1000 w-full p-2 rounded-md transition-all duration-500 ease-out"
                  size="lg"
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </FXForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
