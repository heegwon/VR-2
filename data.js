var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "파노라마1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41892277063160854,
          "pitch": 0.017891847871375433,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23990323614221332,
          "pitch": -0.0304758175853852,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
