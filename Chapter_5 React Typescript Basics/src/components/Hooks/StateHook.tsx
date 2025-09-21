import { useState, type FormEvent } from "react";

interface Person {
  name: string;
  age: number;
}

const UserForm = () => {
  const [user, setUser] = useState<Person>({ name: "", age: 0 }); // case 1
  // const [user, setUser] = useState<Person>(); // case 2
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("User: ", user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={user?.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <input
          type="number"
          value={user?.age}
          onChange={
            (e) => setUser((prev) => ({ ...prev, age: Number(e.target.value) })) // case 1
            // setUser((prev) => ({ ...prev!, age: Number(e.target.value) })) applicable for case2
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
