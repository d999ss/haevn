export interface ReplayVideo {
  id: string;
  title: string;
  date: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  angles: {
    id: string;
    name: string;
    thumbnailUrl: string;
    videoUrl: string;
  }[];
  stats: {
    waves: number;
    longestRide: string;
    topSpeed: string;
    performance: number;
  };
  highlights: {
    id: string;
    title: string;
    timestamp: string;
    thumbnailUrl: string;
  }[];
}

export const replayVideos: ReplayVideo[] = [
  {
    id: '1',
    title: 'Morning Session',
    date: 'July 1, 2025',
    duration: '1h 23m',
    thumbnailUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-in-the-barrel-of-a-giant-wave-1630-large.mp4',
    angles: [
      {
        id: 'a1',
        name: 'Main View',
        thumbnailUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-in-the-barrel-of-a-giant-wave-1630-large.mp4'
      },
      {
        id: 'a2',
        name: 'Side View',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-riding-a-wave-4183-large.mp4'
      },
      {
        id: 'a3',
        name: 'Overhead',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-surfing-on-a-wave-1179-large.mp4'
      }
    ],
    stats: {
      waves: 12,
      longestRide: '24s',
      topSpeed: '18 mph',
      performance: 78
    },
    highlights: [
      {
        id: 'h1',
        title: 'Perfect Barrel',
        timestamp: '0:34',
        thumbnailUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      },
      {
        id: 'h2',
        title: 'Cutback',
        timestamp: '1:12',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      },
      {
        id: 'h3',
        title: 'Aerial',
        timestamp: '2:05',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      }
    ]
  },
  {
    id: '2',
    title: 'Afternoon Session',
    date: 'June 28, 2025',
    duration: '58m',
    thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-riding-a-wave-4183-large.mp4',
    angles: [
      {
        id: 'a1',
        name: 'Main View',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-riding-a-wave-4183-large.mp4'
      },
      {
        id: 'a2',
        name: 'Side View',
        thumbnailUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-in-the-barrel-of-a-giant-wave-1630-large.mp4'
      },
      {
        id: 'a3',
        name: 'Overhead',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-surfing-on-a-wave-1179-large.mp4'
      }
    ],
    stats: {
      waves: 9,
      longestRide: '18s',
      topSpeed: '16 mph',
      performance: 72
    },
    highlights: [
      {
        id: 'h1',
        title: 'Clean Takeoff',
        timestamp: '0:22',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      },
      {
        id: 'h2',
        title: 'Bottom Turn',
        timestamp: '0:45',
        thumbnailUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      }
    ]
  },
  {
    id: '3',
    title: 'Evening Session',
    date: 'June 25, 2025',
    duration: '1h 05m',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-surfing-on-a-wave-1179-large.mp4',
    angles: [
      {
        id: 'a1',
        name: 'Main View',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-surfing-on-a-wave-1179-large.mp4'
      },
      {
        id: 'a2',
        name: 'Side View',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-surfer-riding-a-wave-4183-large.mp4'
      }
    ],
    stats: {
      waves: 11,
      longestRide: '21s',
      topSpeed: '17 mph',
      performance: 75
    },
    highlights: [
      {
        id: 'h1',
        title: 'Floater',
        timestamp: '0:18',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      },
      {
        id: 'h2',
        title: 'Snap',
        timestamp: '0:52',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      },
      {
        id: 'h3',
        title: 'Roundhouse Cutback',
        timestamp: '1:34',
        thumbnailUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      }
    ]
  }
];
