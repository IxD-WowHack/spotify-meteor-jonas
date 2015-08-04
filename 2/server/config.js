ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": "4c754e8020914b47b032a25c484e5c6c",
        "secret": "f28a087d5fac4feb88cd116b02eb5865"
      }
    },
    { upsert: true }
);
