export default function useClient() {
    return typeof window !== 'undefined';
  }