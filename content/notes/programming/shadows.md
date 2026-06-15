+++
title = "shadows"
+++

# IoT Device Shadows

https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html

Shadows make a device's state available to other services whether the device is connected to AWS IoT or not.

An AWS IoT thing can have multiple named shadows.

Shadows must be created explicitly.

CRUD can happen from reserved MQTT topics, HTTP Device Shadow REST API, or AWS CLI.

## Usage

- https://docs.aws.amazon.com/iot/latest/developerguide/device-shadow-comms-device.html
- https://docs.aws.amazon.com/iot/latest/developerguide/device-shadow-comms-app.html

1. An app can request a change in a device's state by updating a shadow.
2. AWS IoT publishes a message that indicates the change to the device.
3. The device receives the message, updates it's state, and publishes a message with it's updated state.
4. The app can subscribe to the shadow's update or it can query the shadow for its current state.

You can optionally use the persistent session feature to send a delta message to the device after they reconnect, AWS recommends this approach if your devices are frequently offline.

## Names

A Thing can have multiple named shadows and a single unnamed shadow.

AWS recommends picking to use named or unnamed and sticking with it.

## Interface

Every shadow has a reserved MQTT topic and HTTP URL that supports the get, update, and delete actions on the shadow.

Shadows use JSON shadow documents to store and retrieve data. A shadow’s document contains a state property that describes these aspects of the device’s state:

desired

Apps specify the desired states of device properties by updating the desired object.

reported

Devices report their current state in the reported object.

delta

AWS IoT reports differences between the desired and the reported state in the delta object.

### Important

- Devices should write only to the reported property of the shadow state when communicating state data to the shadow.
- Apps and other cloud services should write only to the desired property when communicating state change requests to the device through the shadow.
- There is not guarantee of message ordering for delta updates. Use version property on the update to determine if it is late.
