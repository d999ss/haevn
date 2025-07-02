import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { replayVideos } from '@/mock-data/replay-videos';

export default function ReplayPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">FlowState Replay</h1>
        <p className="text-lg text-gray-600">Watch and analyze your surf sessions from multiple angles.</p>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Filter by:</span>
          <select className="input py-1" aria-label="Filter sessions">
            <option>All Sessions</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Sort by:</span>
          <select className="input py-1" aria-label="Sort sessions">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Highest Performance</option>
          </select>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {replayVideos.map((video) => (
          <Link 
            href={`/replay/${video.id}`} 
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Thumbnail */}
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-white z-20">
                <p className="font-semibold">{video.title}</p>
                <p className="text-sm opacity-90">{video.date}</p>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-20">
                {video.duration}
              </div>
            </div>
            
            {/* Stats */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Waves Caught</p>
                  <p className="font-medium">{video.stats.waves}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Longest Ride</p>
                  <p className="font-medium">{video.stats.longestRide}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Top Speed</p>
                  <p className="font-medium">{video.stats.topSpeed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Performance</p>
                  <div className="flex items-center">
                    <span className="font-medium">{video.stats.performance}</span>
                    <span className="text-xs text-gray-500 ml-1">/100</span>
                  </div>
                </div>
              </div>
              
              {/* Camera Angles */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Camera Angles</p>
                <div className="flex space-x-2">
                  {video.angles.map((angle) => (
                    <div 
                      key={angle.id} 
                      className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"
                      title={angle.name}
                    >
                      <img 
                        src={angle.thumbnailUrl} 
                        alt={angle.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
