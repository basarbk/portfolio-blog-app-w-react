import { useState } from "react";
import { AppButton, AppInput, ImageSelector } from "../../components";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export function Edit() {
  const { auth, userUpdated } = useAuth();
  const [name, setName] = useState(auth.name);
  const [image, setImage] = useState(auth.image);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChangeName = (event) => {
    setName(event.target.value);
    setErrors({});
  };

  const submit = async (event) => {
    event.preventDefault();
    const result = await fetch(`/api/users/${auth.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, image }),
    });
    if (result.ok) {
      userUpdated(name, image);
      navigate(`/${auth.handle}`);
    }
    if (result.status === 400) {
      const body = await result.json();
      setErrors(body.validationErrors);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="col-lg-6 offset-lg-3">
        <div className="card">
          <div className="card-header">
            <ImageSelector
              image={image}
              setImage={setImage}
              setError={() => {}}
            />
          </div>
          <div className="card-body">
            <AppInput
              id="name"
              label="Name"
              value={name}
              onChange={onChangeName}
              help={errors.name}
            />
            <AppButton>Save</AppButton>
          </div>
        </div>
      </div>
    </form>
  );
}
