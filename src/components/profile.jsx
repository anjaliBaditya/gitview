import React, { useEffect, useState } from 'react';

const sampleUserData = {
  login: 'exampleUser',
  name: 'John Doe',
  avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  bio: 'Software developer at OpenAI.',
  location: 'San Francisco, CA',
  blog: 'https://johndoe.dev',
};

const sampleReposData = [
  {
    id: 1,
    name: 'react',
    html_url: 'https://github.com/facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 171000,
    owner: {
      login: 'facebook',
    },
  },
  {
    id: 2,
    name: 'vue',
    html_url: 'https://github.com/vuejs/vue',
    description: '🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    stargazers_count: 183000,
    owner: {
      login: 'vuejs',
    },
  },
  // Add more sample repos if needed
];

const Profile = ({ username }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching user data and starred repos
    setTimeout(() => {
      setUser(sampleUserData);
      setRepos(sampleReposData);
      setLoading(false);
    }, 1000);
  }, [username]);

  if (loading) {
    return <div className="text-center text-3xl p-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-3xl p-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <div className="flex items-center">
          <img src={user.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full mr-6" />
          <div>
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-700 mb-2">@{user.login}</p>
            <p className="text-gray-700 mb-2">{user.bio}</p>
            <p className="text-gray-700 mb-2">{user.location}</p>
            <a href={user.blog} className="text-blue-500 hover:underline">
              {user.blog}
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-10">Starred Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{repo.name}</h2>
            <p className="text-gray-700 mb-4">{repo.description}</p>
            <a href={repo.html_url} className="text-blue-500 hover:underline">
              {repo.html_url}
            </a>
            <p className="text-gray-500 mt-2">⭐ {repo.stargazers_count} stars</p>
            <p className="text-gray-500">Owner: {repo.owner.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Profile username="exampleUser" />
    </div>
  );
};

export default App;
