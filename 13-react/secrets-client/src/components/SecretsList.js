const SecretsList = (props) => {
  const renderSecret = (s) => {
    return (
      <p key={ s.id }>
        { s.content }
      </p>
    );
  }

  return <div>{ props.secrets.map(renderSecret) }</div>;
}

export default SecretsList;
