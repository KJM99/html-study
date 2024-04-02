import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";
import Article from "../atom/Article";

const Signup = () => {
  return (
    <div className="container">
      <Article>
        <form>
          <>
            <Label htmlFor={"name"}>name</Label>
            {/* <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              name
            </label> */}
            <Input id="name" required />
            {/* <input
              id="name"
              required
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
          </>

          <>
            <Label htmlFor={"password"}>password</Label>
            {/* <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              password
            </label> */}
            <Input id="password" type="password" required />
            {/* <input
              id="password"
              type="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
          </>

          <hr className="m-4" />

          <>
            <Button>submit</Button>
            {/* <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              submit
            </button> */}
          </>
        </form>
      </Article>
    </div>
  );
};

export default Signup;
