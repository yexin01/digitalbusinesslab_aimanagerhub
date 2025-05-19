"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser, FiFileText, FiBriefcase, FiCode, FiX, FiLoader, FiSearch } from 'react-icons/fi';
import { useSearch, SearchResultItem } from '../app/context/SearchContext';

const SearchResults = () => {
  const { searchQuery, searchResults, isSearching, isSearchOpen, clearSearch, setSearchQuery } = useSearch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close search with ESC key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        clearSearch();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isSearchOpen, clearSearch]);

  // Auto focus the search input when the search modal opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) {
    return null;
  }

  const renderIcon = (type: string) => {
    switch (type) {
      case 'team_member':
        return <FiUser size={18} className="text-[#BF82FF]" />;
      case 'action':
        return <FiFileText size={18} className="text-[#25CD25]" />;
      case 'project':
        return <FiBriefcase size={18} className="text-[#4C9AFF]" />;
      case 'skill':
        return <FiCode size={18} className="text-[#FFA500]" />;
      default:
        return <FiFileText size={18} className="text-[#6B6B6B]" />;
    }
  };

  // Group results by type
  const groupedResults = searchResults.reduce<Record<string, SearchResultItem[]>>((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'team_member':
        return 'Team Members';
      case 'action':
        return 'Actions';
      case 'project':
        return 'Projects';
      case 'skill':
        return 'Skills';
      default:
        return 'Results';
    }
  };

  const renderItem = (item: SearchResultItem) => (
    <Link 
      href={item.url || '#'} 
      key={item.id}
      className="flex items-center gap-3 px-4 py-3 hover:bg-[#F6F6F3] rounded-xl transition-colors"
      onClick={clearSearch}
    >
      {item.type === 'team_member' && item.avatar ? (
        <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-sm flex-shrink-0">
          <Image 
            src={item.avatar} 
            alt={item.name} 
            fill 
            sizes="32px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-[#F6F6F3] flex items-center justify-center flex-shrink-0">
          {renderIcon(item.type)}
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-[#131313] truncate">{item.name}</span>
        <span className="text-xs text-[#6B6B6B] truncate">
          {item.role || item.description || getTypeLabel(item.type)}
        </span>
      </div>
    </Link>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center" onClick={clearSearch}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div 
        className="absolute top-24 w-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="border-b border-[#F0F0F0]">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-base font-semibold text-[#131313]">
              Search
            </h3>
            <button 
              onClick={clearSearch}
              className="p-2 rounded-full hover:bg-[#F6F6F3] transition-colors"
            >
              <FiX size={18} className="text-[#6B6B6B]" />
            </button>
          </div>
          
          {/* Search input */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F6F6F3] rounded-xl transition-all duration-200 focus-within:bg-white focus-within:border focus-within:border-[#BF82FF] focus-within:shadow-sm">
              <FiSearch size={16} className="text-[#6B6B6B]" />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search for team members, projects, skills..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm font-medium text-[#131313] outline-none w-full placeholder:text-[#6B6B6B] placeholder:font-normal" 
              />
              {searchQuery && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className="text-[#6B6B6B] hover:text-[#131313] transition-colors"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Search results */}
        <div className="overflow-y-auto max-h-[calc(70vh-120px)]">
          {isSearching ? (
            <div className="flex items-center justify-center p-8">
              <FiLoader size={24} className="text-[#BF82FF] animate-spin" />
              <span className="ml-3 text-sm text-[#6B6B6B]">Searching...</span>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-2">
              {Object.keys(groupedResults).map(type => (
                <div key={type} className="mb-4">
                  <div className="px-4 py-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                    {getTypeLabel(type)}
                  </div>
                  <div>
                    {groupedResults[type].map(item => renderItem(item))}
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="p-8 text-center">
              <p className="text-sm text-[#6B6B6B]">No results found for &quot;{searchQuery}&quot;</p>
              <p className="mt-2 text-xs text-[#6B6B6B]">Try a different search term</p>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-sm text-[#6B6B6B]">Type to start searching</p>
              <p className="mt-2 text-xs text-[#6B6B6B]">Search for team members, actions, projects, skills</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 