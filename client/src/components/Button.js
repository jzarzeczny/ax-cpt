export default function Button({ name, styling, type, func = null }) {
  return (
    <>
      <button
        type={type && `${type}`}
        className={`btn ${styling}`}
        onClick={func}
      >
        {name}
      </button>
    </>
  );
}
