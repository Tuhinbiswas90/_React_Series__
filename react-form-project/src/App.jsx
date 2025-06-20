import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //api call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve,5000)); //5s delay k bad form submit hoga
    console.log("Submitting the form...", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstName ? "input-error" : " "}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min len atleast 3" },
            maxLength: 10,
          })}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input {...register("middleName")} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only letters are allowed",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  );
}

export default App;
