import React from 'react';
import { render, fireEvent, waitFor , screen, within} from '@testing-library/react';
import axios from 'axios';
import { fetchArtefactData } from '../Hooks/ManagingArtefact';
import Artefact from '';

jest.mock('axios');

describe('Artefact component', () => {
  it('should fetch artefact data and update state', async () => {
   const artefact = await fetchArtefactData();
   expect(artefact).toEqual(13);
  });

  // Add more tests for other functions such as handleArtefact, handleDeleteArtefact, etc.
});
