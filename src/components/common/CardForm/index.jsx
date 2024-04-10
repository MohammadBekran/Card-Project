import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";

import { createCardSchema } from "../../../core/validations/createCard.validation";
import { editCardSchema } from "../../../core/validations/editCard.validation";

import { ErrorMessage } from "../ErrorMessage";
import { toast } from "../toast";

import "easymde/dist/easymde.min.css";

const CardForm = ({ initialValues }) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(initialValues ? editCardSchema : createCardSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await toast.promise(
        initialValues
          ? axios.put(
              `https://65fc4e419fc4425c652fb699.mockapi.io/card/${initialValues.id}`,
              { ...data, createdAt: 98989 }
            )
          : axios.post(
              "https://65fc4e419fc4425c652fb699.mockapi.io/card",
              data
            ),
        {
          loading: initialValues
            ? "The card is being updated ..."
            : "The card is being created ...",
          success: initialValues
            ? "Card updated successfully!"
            : "Card created successfully!",
          error: "Something went wrong!",
        }
      );
      navigate("/dashboard/cards");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (initialValues) {
      setValue("title", initialValues.title);
      setValue("shortDescription", initialValues.shortDescription);
      setValue("mainDescription", initialValues.mainDescription);
    }
  }, [initialValues, setValue]);

  return (
    <div className="mx-auto mt-8">
      <div className="lg:w-[90%] shadow-darkShadow rounded-md px-5 py-4">
        <div>
          <h2 className="text-2xl font-bold dark:text-dark">
            {initialValues
              ? `Update Card: ${initialValues.title}`
              : "Create a new card"}
          </h2>
          <p className="text-[#585858] dark:text-dark text-sm">
            {initialValues
              ? `In this page you can update this card: ${initialValues.title}`
              : "In this page you can create a new card."}
          </p>
        </div>
        <div className="mt-6">
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className="flex flex-col gap-4"
          >
            <div>
              <p className="formLabels">Card Title</p>
              <input
                type="text"
                placeholder="Card Title..."
                className="w-full border-solid border-[1px] border-borderPrimary rounded-md px-3 py-2 outline-primaryOutline mt-1 darkInputAndTextarea"
                {...register("title")}
              />
              <ErrorMessage>{errors?.title}</ErrorMessage>
            </div>
            <div>
              <p className="formLabels">Short Description</p>
              <textarea
                className="w-full min-h-[150px] border-solid border-[1px] border-borderPrimary rounded-md outline-primaryOutline px-2 py-2 darkInputAndTextarea"
                {...register("shortDescription")}
              />
            </div>
            <div>
              <p className="formLabels">Main Description</p>
              <Controller
                name="mainDescription"
                control={control}
                render={({ field }) => (
                  <SimpleMDE placeholder="Main Description" {...field} />
                )}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-buttonPrimary dark:bg-gray-900 dark:text-dark dark:shadow-darkShadow py-[5px] rounded-md"
              >
                {initialValues ? "Update Card" : "Create Card"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CardForm.propTypes = {
  initialValues: PropTypes.object,
};

export { CardForm };
