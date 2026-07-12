import { useState } from "react";
import { USERNAME, AGE, SEX, HOBBIES, HOBBY_OPTIONS } from "./constant";

export default function RegisterForm() {
  const [form, setForm] = useState({
    [USERNAME]: "",
    [AGE]: "",
    [SEX]: "male",
    [HOBBIES]: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // maybe name and value may be undefined
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleHobbyChange = (hobby) => {
    setForm((prev) => {
      const exists = prev.hobbies.includes(hobby);
      return {
        ...prev,
        hobbies: exists
          ? prev.hobbies.filter((h) => h !== hobby)
          : [...prev.hobbies, hobby],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User register data:", form);
    alert(JSON.stringify(form, null, 2));
  };

  const renderUserName = () => (
    <div>
      <label className="block mb-1">Username</label>
      <input
        type="text"
        name={USERNAME}
        value={form.username}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
    </div>
  );

  const renderAge = () => (
    <div>
      <label className="block mb-1">Age</label>
      <input
        type="number"
        name={AGE}
        value={form.age}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
    </div>
  );

  const renderHobbies = () => (
    <div>
      <label className="block mb-1">Hobbies</label>
      <div className="flex flex-wrap gap-2">
        {HOBBY_OPTIONS.map((hobby) => (
          <label key={hobby} className="flex items-center gap-1">
            <input
              type="checkbox"
              name={HOBBIES}
              value={hobby}
              checked={form.hobbies.includes(hobby)}
              onChange={() => handleHobbyChange(hobby)}
            />
            <span>{hobby}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {renderUserName()}
        {renderAge()}

        {/* sex */}
        <div>
          <label className="block mb-1">Sex</label>
          <select
            name={SEX}
            value={form.sex}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            {SEX_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {renderHobbies()}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
