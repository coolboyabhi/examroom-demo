import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ContentItem, ContentTabItem } from '../types/content.type';
import { CONTENT_ITEMS, CONTENT_TAB_ITEMS } from '../data/contentTabItems.data';

@Injectable({
  providedIn: 'root'
})
export class TabDataService {

  private _contentTabItems$: BehaviorSubject<ContentTabItem[]>
    = new BehaviorSubject<ContentTabItem[]>([]);

  constructor(){
    this._contentTabItems$.next(CONTENT_TAB_ITEMS);
  }

  //-------------------------------------
  // @ Getters and setters
  //-------------------------------------

  /**
   * get content tab items observable
   */
  get contentTabItems$(): Observable<ContentTabItem[]> {
    return this._contentTabItems$.asObservable();
  }

  /**
   * Get content for server DB
   *
   * @returns Observable with serverdb items
   */
  getContentFromServerDB(): Observable<ContentTabItem[]> {
    return of(CONTENT_TAB_ITEMS.filter(item => item.for.includes('SERVER_DB')));
  }

  /**
   * Get items for server DB
   *
   * @returns Observable with serverdb items
   */
  getItemsFromServerDB(): Observable<ContentItem[]> {
    return of(CONTENT_ITEMS.filter(item => item.for.includes('SERVER_DB')));
  }

  /**
   * Get items for support operation
   *
   * @returns Observable with support operation
   */
  getItemsFromSupportOperations(): Observable<ContentItem[]> {
    return of(CONTENT_ITEMS.filter(item => item.for.includes('SUPPORT_OPERATIONAL')));
  }
  
  /**
  * Get items for business operation
  *
  * @returns Observable with business operation
  */
 getItemsFromBusinessOperations(): Observable<ContentItem[]> {
   return of(CONTENT_ITEMS.filter(item => item.for.includes('BUSINESS_OPERATIONAL')));
 }


  
  /**
   * Get content for business operation
   *
   * @returns Observable with business operation
   */
  getContentFromBusinessOperations(): Observable<ContentTabItem[]> {
    return of(CONTENT_TAB_ITEMS.filter(item => item.for.includes('BUSINESS_OPERATIONAL')));
  }

  /**
   * Get content for support operation
   *
   * @returns Observable with support operation
   */
  getContentFromSupportOperations(): Observable<ContentTabItem[]> {
    return of(CONTENT_TAB_ITEMS.filter(item => item.for.includes('SUPPORT_OPERATIONAL')));
  }
  
}
