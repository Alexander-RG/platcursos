
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push('/login'); // Redirect to login page
    return null;
  }

  return children;
};

export default ProtectedRoute;
