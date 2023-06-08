const IS_DEV = process.env.APP_VARIANT === "development";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // You can also switch out the app icon and other properties to further
  // differentiate the app on your device.
  name: IS_DEV ? "Spacecraft (Dev)" : "Spacecraft",
  slug: "spacecraft",
  icon: IS_DEV ? "./assets/icon_dev.png" : "./assets/icon.png",
  ios: {
    bundleIdentifier: IS_DEV
      ? "com.aubrianecv.spacecraft.dev"
      : "com.aubrianecv.spacecraft",
  },
  android: {
    package: IS_DEV
      ? "com.aubrianecv.spacecraft.dev"
      : "com.aubrianecv.spacecraft",
  },
  extra: {
    eas: {
      projectId: "0c1efe03-c2ef-4e1e-af2a-2123e366268c",
    },
  },
};
