/* eslint-disable-next-line */
export interface SharedComponentsProps {
  title: string;
}

export function SharedComponents(props: SharedComponentsProps) {
  return (
    <div>
      <h1>Welcome to {props.title}!</h1>
    </div>
  );
}

export default SharedComponents;
