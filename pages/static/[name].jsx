import fetch from 'isomorphic-unfetch';

const name = ({ user, time }) => {
  const username = user && user.name;
  return (
    <div>
      {username}
      {time}
    </div>
  );
};

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);

    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() } };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (error) {
    console.log(error);
    return { props: { time: new Date().toISOString() } };
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'jerrynim' } }],
    fallback: true,
  };
}

export default name;
