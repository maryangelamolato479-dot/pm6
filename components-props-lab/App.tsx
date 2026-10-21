import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import UserCard from './components/UserCard';

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  color: string;
}

export default function App() {
  const users: User[] = [
    { id: 1, name: 'Mary Amolato', role: 'Developer', email: 'mary@example.com', color: '#10B981' },
    { id: 2, name: 'AJ', role: 'Project Partner', email: 'aj@example.com', color: '#6366F1' },
    { id: 3, name: 'Lucille Admin', role: 'System Admin', email: 'admin@lucille.com', color: '#EF4444' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Team Overview</Text>

        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            role={user.role}
            email={user.email}
            badgeColor={user.color}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111827',
  },
});