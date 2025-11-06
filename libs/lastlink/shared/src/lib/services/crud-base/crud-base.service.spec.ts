import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IUser, TDomainsValues, TEnvironmentApisKeys } from '@lastlink/core';

import { lastValueFrom, of } from 'rxjs';
import * as USERS from './../users/users.json';
import { CrudBaseService } from './crud-base.service';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class MockService extends CrudBaseService<IUser> {
  override readonly api: TEnvironmentApisKeys = 'jsonPlaceholderTypicode';
  override readonly domain: TDomainsValues = 'users';
}

describe('CrudBaseService', () => {
  const users = USERS as unknown as IUser[];

  let service: MockService;

  beforeEach(() => {
    const httpClientSpy = {
      get: jest.fn((url?: string) => {
        if (typeof url !== 'string') return of(users);
        if (url.endsWith('/1')) return of(users[0]);
        if (url.endsWith('/11')) return of(users[10]);
        if (url.endsWith('/20')) return of({});
        return of(users);
      }),
      post: jest
        .fn()
        .mockReturnValue(of({ ...users[0], id: 11, username: 'NEW_USER' })),
      put: jest.fn().mockReturnValue(of({ ...users[4], username: 'USER_PUT' })),
      patch: jest
        .fn()
        .mockReturnValue(of({ ...users[4], username: 'USER_PATCH' })),
      delete: jest.fn().mockReturnValue(of({})),
    };

    TestBed.configureTestingModule({
      providers: [
        MockService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });

    service = TestBed.inject(MockService);
  });

  describe('Initialization', () => {
    it('should use users mock', () => {
      expect(users).toBeDefined();
      expect(users.length).toBe(10);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('Call .read()', () => {
    it('items must be valid', async () => {
      const items = await lastValueFrom(service.read());
      expect(items).toBeDefined();
    });

    it('items must have 10 elements', async () => {
      const items = await lastValueFrom(service.read());
      expect(items.length).toBe(10);
    });

    it('items[0] must match users[0]', async () => {
      const items = await lastValueFrom(service.read());
      expect(items[0]).toMatchObject(users[0]);
    });
  });

  describe('Call .readId(1)', () => {
    it('item must be valid', async () => {
      const item = await lastValueFrom(service.readId(1));
      expect(item).toBeDefined();
    });

    it('item must match users[0]', async () => {
      const item = await lastValueFrom(service.readId(1));
      expect(item).toMatchObject(users[0]);
    });

    it('item must have email', async () => {
      const item = await lastValueFrom(service.readId(1));
      expect(item.email).toBeDefined();
    });
  });

  describe('Call .readId(20)', () => {
    it('item must be invalid', async () => {
      const item = await lastValueFrom(service.readId(20));
      expect(item).toMatchObject({});
    });

    it('item must not have id', async () => {
      const item = await lastValueFrom(service.readId(20));
      expect(item.id).toBeUndefined();
    });
  });
});
