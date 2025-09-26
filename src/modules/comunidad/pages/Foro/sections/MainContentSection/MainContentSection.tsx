import { ArrowUpIcon, EyeIcon, MessageSquareIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar } from "../../../../../../components/ui/avatar";
import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

export const MainContentSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<'reciente' | 'comentado'>('reciente');

  // Forum post data
  const forumPosts = [
    {
      avatar: "/ava-3.svg",
      name: "Nombre",
      timeAgo: "minutos",
      title: "Titulo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ["Texto", "Texto", "Texto"],
      hasImage: false,
      views: 0,
      comments: 0,
      upvotes: 0,
    },
    {
      avatar: "/ava.svg",
      name: "Name",
      timeAgo: "minutos",
      title: "Titulo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ["Texto", "Texto", "Texto"],
      hasImage: true,
      views: 0,
      comments: 0,
      upvotes: 0,
    },
    {
      avatar: "/ava-4.svg",
      name: "Name",
      timeAgo: "minutos",
      title: "Titulo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ["Texto", "Texto", "Texto"],
      hasImage: false,
      views: 0,
      comments: 0,
      upvotes: 0,
    },
    {
      avatar: "/ava-1.svg",
      name: "Name",
      timeAgo: "minutos",
      title: "Titulo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ["Texto", "Texto", "Texto"],
      hasImage: false,
      views: 0,
      comments: 0,
      upvotes: 0,
    },
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      month: "Mes",
      day: "0",
      title: "Titulo",
      location: "Ubicación",
      tags: ["hashtag", "hashtag", "hashtag"],
    },
    {
      month: "Mes",
      day: "0",
      title: "Titulo",
      location: "Ubicación",
      tags: ["hashtag", "hashtag"],
    },
    {
      month: "Mes",
      day: "0",
      title: "Titulo",
      location: "Ubicación",
      tags: ["hashtag", "hashtag", "hashtag"],
    },
  ];

  // Latest technologies data
  const latestTechnologies = [
    {
      title: "Titulo",
      location: "Ubicación",
      tags: ["hashtag", "hashtag", "hashtag"],
    },
    {
      title: "Titulo",
      location: "Ubicación",
      tags: ["hashtag", "hashtag", "hashtag"],
    },
    {
      title: "Titulo",
      location: "Ubicación",
      tags: ["hashtag", "hashtag", "hashtag"],
    },
  ];

  const handleFilterChange = (filter: 'reciente' | 'comentado') => {
    setActiveFilter(filter);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start w-full bg-secondary-50 min-h-screen">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-start gap-6 p-4 lg:p-6 w-full lg:w-auto">
        {/* Espaciado superior en móvil para el botón del menú */}
        <div className="lg:hidden h-16 w-full"></div>
        
        {/* Question input area */}
        <div className="card-elevated w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full mb-4">
            <Avatar className="w-10 h-10 flex-shrink-0">
              <img src="/ava-2.svg" alt="Avatar" className="object-cover" />
            </Avatar>
            <Input
              className="flex-1 bg-primary-50 border-app-border text-shadow-700 text-body-md placeholder-subtitle-text"
              placeholder="Escribe tu pregunta aquí"
            />
          </div>
          <div className="flex justify-end">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Publica aquí
            </Button>
          </div>
        </div>

        {/* Filter options with new rounded tag style */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <button
              onClick={() => handleFilterChange('reciente')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 w-full sm:w-auto ${
                activeFilter === 'reciente'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'bg-white text-gray-600 hover:text-primary-600'
              }`}
            >
              Reciente
            </button>
            <button
              onClick={() => handleFilterChange('comentado')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 w-full sm:w-auto ${
                activeFilter === 'comentado'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'bg-white text-gray-600 hover:text-primary-600'
              }`}
            >
              Más comentado
            </button>
          </div>
        </div>

        {/* Forum posts */}
        <div className="w-full flex flex-col gap-6">
          {forumPosts.map((post, index) => (
            <div key={index} className="card w-full">
              {/* User info */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <img
                    src={post.avatar}
                    alt="Avatar"
                    className="object-cover"
                  />
                </Avatar>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="text-body-md font-medium text-shadow-900 truncate">
                    {post.name}
                  </div>
                  <div className="text-body-sm text-subtitle-text">
                    {post.timeAgo}
                  </div>
                </div>
              </div>

              {/* Post content */}
              <div className="mb-4">
                <h3 className="text-heading-sm text-shadow-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-body-md text-shadow-700 leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Post image if exists */}
              {post.hasImage && (
                <div className="w-full h-48 sm:h-64 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/image.png" 
                    alt="Medical procedure" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Tags and stats */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="px-3 py-1 bg-shadow-100 text-subtitle-text text-body-sm rounded-lg border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-subtitle-text">
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-4 h-4" />
                    <span className="text-body-sm">{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquareIcon className="w-4 h-4" />
                    <span className="text-body-sm">{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUpIcon className="w-4 h-4" />
                    <span className="text-body-sm">{post.upvotes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar - Oculto en móvil, visible en tablet y desktop */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-6 flex flex-col gap-6 p-6 bg-white">
          {/* Forum rules */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-heading-sm text-shadow-900 mb-4">
              Reglas del foro
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <p className="text-body-md text-primary-500 underline cursor-pointer hover:text-primary-600 transition-colors">
                  Lee las reglas antes de comenzar a utilizar el foro.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <p className="text-body-md text-primary-500 underline cursor-pointer hover:text-primary-600 transition-colors">
                  Visión y estrategia.
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming events */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-heading-sm text-shadow-900 mb-6">
              Próximos Eventos
            </h3>

            <div className="flex flex-col gap-5">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Calendar */}
                  <div className="flex flex-col items-center justify-center w-12 h-24 bg-primary-200 rounded-lg border border-primary-300 flex-shrink-0">
                    <div className="text-body-xs font-semibold text-secondary-50">
                      {event.month}
                    </div>
                    <div className="text-lg font-normal text-white">
                      {event.day}
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className="flex-1 min-w-0">
                    {/* Title and location */}
                    <div className="mb-3">
                      <div className="text-body-md font-semibold text-shadow-900 mb-1">
                        {event.title}
                      </div>
                      <div className="text-body-md text-shadow-500">
                        {event.location}
                      </div>
                    </div>
                    
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary-600 text-white text-body-xs rounded-3xl whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest technologies */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-heading-sm text-shadow-900 mb-6">
              Últimas tecnologías
            </h3>

            <div className="flex flex-col gap-6">
              {latestTechnologies.map((tech, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-full h-24 bg-primary-100 rounded-lg border border-primary-200" />
                  <div>
                    <div className="text-body-md font-semibold text-shadow-700 mb-1">
                      {tech.title}
                    </div>
                    <div className="text-body-md font-semibold text-shadow-500 mb-3">
                      {tech.location}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tech.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary-600 text-white text-body-xs rounded-3xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {index < latestTechnologies.length - 1 && (
                    <div className="border-b border-app-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};