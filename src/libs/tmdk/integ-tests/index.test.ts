// Copyright 2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { handler, Options } from '../src/commands/init';
import {Arguments} from "yargs";

import {
  ConflictException,
  CreateComponentTypeRequest,
  ResourceNotFoundException, ValidationException,
  GetWorkspaceCommand, IoTTwinMakerClient, GetWorkspaceCommandOutput
} from "@aws-sdk/client-iottwinmaker";
// import { mockClient } from 'jest-aws-client-mock';
import { mockClient } from "aws-sdk-client-mock";


describe('testing init', () => {
  test('test01', () => {

    var argv2 = {
      _: [ 'init' ],
      '$0': 'tmdk_local',
      region: "us-east-1",
      "workspace-id": "SyncB",
      out: "/tmp/tmdk-integ-test",
    } as Arguments<Options>;
    return handler(argv2).then(result => expect(result).toBe(0));
  }, 60000);

});

