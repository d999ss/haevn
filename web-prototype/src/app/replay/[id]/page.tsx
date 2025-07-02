'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { replayVideos } from '@/mock-data/replay-videos';

export default function ReplayDetailPage() {
  const router = useRouter();
  const { id } = useParams();
  const videoId = Array.isArray(id) ? id[0] : id;
  
  // Find the video data based on the ID
  const video = replayVideos.find(v => v.id === videoId);
  
  const [currentAngle, setCurrentAngle] = useState(video?.angles[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [showStats, setShowStats] = useState(true);
  
  // Handle cases where video is not found
  if (!video) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Video not found</h2>
        <p className="mb-8">The requested replay video could not be found.</p>
        <button 
          onClick={() => router.push('/replay')}
          className="btn btn-primary"
        >
          Back to Replays
        </button>
      </div>
    );
  }

  // Format time for video player
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Switch camera angle
  const switchAngle = (angle: any) => {
    setCurrentAngle(angle);
    // In a real implementation, we would also need to sync the video time
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <button 
          onClick={() => router.push('/replay')}
          className="text-blue-600 hover:text-blue-800 flex items-center"
          aria-label="Back to all replays"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Replays
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Video Player Section */}
        <div className="lg:w-2/3">
          <div className="bg-black rounded-lg overflow-hidden">
            {/* Video Player */}
            <div className="relative aspect-video">
              {/* Video Element - In a real app, this would be an actual video player */}
              <div 
                className="w-full h-full bg-gray-900 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${currentAngle?.thumbnailUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {!isPlaying && (
                  <button 
                    onClick={togglePlay}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
                    aria-label="Play video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Video Controls - Only visible when playing */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <button 
                      onClick={togglePlay}
                      className="mr-3"
                      aria-label="Pause video"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <span className="mr-2 text-sm">{formatTime(currentTime)}</span>
                    
                    <div className="flex-grow mx-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={currentTime} 
                        onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                        className="w-full"
                        aria-label="Video progress"
                      />
                    </div>
                    
                    <span className="ml-2 text-sm">{video.duration}</span>
                    
                    <div className="flex items-center ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={volume} 
                        onChange={(e) => setVolume(parseInt(e.target.value))}
                        className="w-20 ml-1"
                        aria-label="Volume control"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Camera Angles */}
            <div className="bg-gray-900 p-4">
              <h3 className="text-white text-sm mb-2">Camera Angles</h3>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {video.angles.map((angle) => (
                  <button
                    key={angle.id}
                    onClick={() => switchAngle(angle)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 ${currentAngle?.id === angle.id ? 'border-blue-500' : 'border-transparent'}`}
                    aria-label={`Switch to ${angle.name} camera angle`}
                  >
                    <div className="w-20 h-12 relative">
                      <img 
                        src={angle.thumbnailUrl} 
                        alt={angle.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 text-center">
                        {angle.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Information */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <p className="text-gray-600">{video.date}</p>
            <p className="mt-4">{video.description || 'No description available for this session.'}</p>
          </div>

          {/* Highlights */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {video.highlights && video.highlights.map((highlight, index) => (
                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <img 
                      src={highlight.thumbnailUrl} 
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                        aria-label={`Play highlight: ${highlight.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {highlight.duration}
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="font-medium text-sm">{highlight.title}</p>
                    <p className="text-xs text-gray-600">{highlight.timestamp}</p>
                  </div>
                </div>
              ))}
              {(!video.highlights || video.highlights.length === 0) && (
                <p className="col-span-full text-gray-500">No highlights available for this session.</p>
              )}
            </div>
          </div>
        </div>

        {/* Performance Stats Section */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Performance Stats</h2>
              <button 
                onClick={() => setShowStats(!showStats)}
                className="text-blue-600 text-sm"
                aria-label={showStats ? "Hide detailed stats" : "Show detailed stats"}
              >
                {showStats ? 'Hide Details' : 'Show Details'}
              </button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Waves Caught</p>
                <p className="text-2xl font-bold">{video.stats.waves}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Performance Score</p>
                <p className="text-2xl font-bold">{video.stats.performance}<span className="text-sm text-gray-500">/100</span></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Longest Ride</p>
                <p className="text-2xl font-bold">{video.stats.longestRide}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Top Speed</p>
                <p className="text-2xl font-bold">{video.stats.topSpeed}</p>
              </div>
            </div>

            {/* Detailed Stats */}
            {showStats && (
              <div className="border-t pt-4">
                <h3 className="font-bold mb-3">Detailed Metrics</h3>
                
                {/* Wave Quality */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Wave Quality</span>
                    <span className="text-sm font-medium">{video.stats.waveQuality || 'A-'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                {/* Maneuver Variety */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Maneuver Variety</span>
                    <span className="text-sm font-medium">{video.stats.maneuverVariety || 'B+'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                {/* Flow & Rhythm */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Flow & Rhythm</span>
                    <span className="text-sm font-medium">{video.stats.flowRhythm || 'A'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                {/* Wave Positioning */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Wave Positioning</span>
                    <span className="text-sm font-medium">{video.stats.wavePositioning || 'B'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                {/* Maneuver Breakdown */}
                <div className="mt-6">
                  <h3 className="font-bold mb-3">Maneuver Breakdown</h3>
                  <div className="space-y-2">
                    {video.stats.maneuvers ? (
                      Object.entries(video.stats.maneuvers).map(([key, value]: [string, any]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm">{key}</span>
                          <span className="text-sm font-medium">{value}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Bottom Turns</span>
                          <span className="text-sm font-medium">12</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cutbacks</span>
                          <span className="text-sm font-medium">8</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Floaters</span>
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Aerials</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Share & Export */}
            <div className="mt-8 border-t pt-6">
              <h3 className="font-bold mb-3">Share & Export</h3>
              <div className="flex space-x-2">
                <button 
                  className="btn btn-outline flex-1 flex items-center justify-center"
                  aria-label="Share replay"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
                <button 
                  className="btn btn-outline flex-1 flex items-center justify-center"
                  aria-label="Download replay"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Coach Notes */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Coach Notes</h2>
            {video.coachNotes ? (
              <div className="prose max-w-none">
                <p>{video.coachNotes}</p>
              </div>
            ) : (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-700">
                  No coach notes available for this session yet. Schedule a review with a coach to get personalized feedback.
                </p>
                <button className="mt-2 text-sm text-blue-600 font-medium">
                  Schedule Coach Review
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
