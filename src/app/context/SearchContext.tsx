"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Define the types of content that can be searched
export type SearchResultItem = {
  id: string;
  name: string;
  type: 'team_member' | 'action' | 'project' | 'skill';
  description?: string;
  avatar?: string;
  role?: string;
  url?: string;
};

interface SearchContextType {
  searchQuery: string;
  searchResults: SearchResultItem[];
  isSearching: boolean;
  isSearchOpen: boolean;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
  toggleSearchOpen: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Clear search when navigating to a new page
  useEffect(() => {
    clearSearch();
  }, [pathname]);

  const toggleSearchOpen = () => {
    setIsSearchOpen(prev => !prev);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
    setIsSearchOpen(false);
  };

  // Effect to handle search when query changes
  useEffect(() => {
    let isMounted = true;

    const performSearch = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);

      try {
        // Simulate an API call with a 300ms delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Call our search service
        const results = await searchContent(searchQuery);
        
        if (isMounted) {
          setSearchResults(results);
          setIsSearching(false);
        }
      } catch (error) {
        console.error('Search error:', error);
        if (isMounted) {
          setIsSearching(false);
        }
      }
    };

    performSearch();

    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        isSearching,
        isSearchOpen,
        setSearchQuery,
        clearSearch,
        toggleSearchOpen
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Mock search service function
async function searchContent(query: string): Promise<SearchResultItem[]> {
  // This would normally be an API call to a backend service
  // For this example, we're mocking the search with static data
  
  // Normalize the query for case-insensitive search
  const normalizedQuery = query.toLowerCase();
  
  // Team members data (from TeamOverview.tsx)
  const teamMembers = [
    {
      id: '1',
      name: 'Chris Friedkly',
      role: 'Senior Developer',
      avatar: '/images/chris_avatar.png',
      type: 'team_member' as const,
      description: 'Senior Developer with high engagement',
      url: '/',
    },
    {
      id: '2',
      name: 'Maggie Johnson',
      role: 'UX Designer',
      avatar: '/images/maggie_avatar.png',
      type: 'team_member' as const,
      description: 'UX Designer with high engagement',
      url: '/',
    },
    {
      id: '3',
      name: 'Gael Harry',
      role: 'Software Engineer',
      avatar: '/images/gael_avatar.png',
      type: 'team_member' as const,
      description: 'Software Engineer with medium engagement',
      url: '/',
    },
    {
      id: '4',
      name: 'Jenna Sullivan',
      role: 'QA Engineer',
      avatar: '/images/jenna_avatar.png',
      type: 'team_member' as const,
      description: 'QA Engineer with low engagement',
      url: '/',
    },
    {
      id: '5',
      name: 'Marco Rossi',
      role: 'Data Scientist',
      avatar: '/images/new_avatars/ryan_avatar.png',
      type: 'team_member' as const,
      description: 'Data Scientist with high engagement',
      url: '/',
    },
    {
      id: '6',
      name: 'Emily Chen',
      role: 'Product Manager',
      avatar: '/images/new_avatars/sophia_avatar.png',
      type: 'team_member' as const,
      description: 'Product Manager with medium engagement',
      url: '/',
    },
    {
      id: '7',
      name: 'Alex Martinez',
      role: 'Frontend Developer',
      avatar: '/images/new_avatars/alex_avatar.png',
      type: 'team_member' as const,
      description: 'Frontend Developer with high engagement',
      url: '/',
    },
    {
      id: '8',
      name: 'Sophia Kim',
      role: 'Backend Developer',
      avatar: '/images/new_avatars/laura_avatar.png',
      type: 'team_member' as const,
      description: 'Backend Developer with high engagement',
      url: '/',
    },
    {
      id: '9',
      name: 'Daniel Wilson',
      role: 'DevOps Engineer',
      avatar: '/images/new_avatars/daniel_avatar.png',
      type: 'team_member' as const,
      description: 'DevOps Engineer with medium engagement',
      url: '/',
    },
    {
      id: '10',
      name: 'Anna Petrov',
      role: 'UI Designer',
      avatar: '/images/new_avatars/anna_avatar.png',
      type: 'team_member' as const,
      description: 'UI Designer with high engagement',
      url: '/',
    }
  ];
  
  // Actions data
  const actions = [
    {
      id: 'a1',
      name: 'Schedule 1:1 with Maggie',
      type: 'action' as const,
      description: 'Personal check-in meeting with Maggie Johnson',
      url: '/',
    },
    {
      id: 'a2',
      name: 'Review Chris\'s performance',
      type: 'action' as const,
      description: 'Quarterly performance review for Chris Friedkly',
      url: '/',
    },
    {
      id: 'a3',
      name: 'Skill development for Gael',
      type: 'action' as const,
      description: 'Create development plan for Gael Harry',
      url: '/',
    }
  ];
  
  // Projects data
  const projects = [
    {
      id: 'p1',
      name: 'Website Redesign',
      type: 'project' as const,
      description: 'Overhaul of company website and UI elements',
      url: '/',
    },
    {
      id: 'p2',
      name: 'Mobile App Development',
      type: 'project' as const,
      description: 'New mobile application for customer engagement',
      url: '/',
    },
    {
      id: 'p3',
      name: 'Data Pipeline Upgrade',
      type: 'project' as const,
      description: 'Improving data processing infrastructure',
      url: '/',
    }
  ];
  
  // Skills data
  const skills = [
    {
      id: 's1',
      name: 'JavaScript',
      type: 'skill' as const,
      description: 'Programming language for web development',
      url: '/',
    },
    {
      id: 's2',
      name: 'UI/UX Design',
      type: 'skill' as const,
      description: 'User interface and experience design',
      url: '/',
    },
    {
      id: 's3',
      name: 'React Development',
      type: 'skill' as const,
      description: 'Frontend framework for building user interfaces',
      url: '/',
    },
    {
      id: 's4',
      name: 'Python',
      type: 'skill' as const,
      description: 'Programming language for data science and backend',
      url: '/',
    }
  ];
  
  // Combine all searchable content
  const allContent = [...teamMembers, ...actions, ...projects, ...skills];
  
  // Filter content based on the search query
  return allContent.filter(item => {
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      (item.description && item.description.toLowerCase().includes(normalizedQuery)) ||
      ('role' in item && item.role && item.role.toLowerCase().includes(normalizedQuery))
    );
  });
} 