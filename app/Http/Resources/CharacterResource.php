<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CharacterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'       => $this->resource->id,
            'name'     => $this->resource->name,
            'status'   => $this->resource->status,
            'species'  => $this->resource->species,
            'type'     => $this->resource->type,
            'gender'   => $this->resource->gender,
            'origin'   => $this->resource->origin,
            'location' => $this->resource->location,
            'image'    => $this->resource->image,
            'episode'  => array_map(
                fn(string $episode_url) => (int) str_replace(
                    "https://rickandmortyapi.com/api/episode/",
                    "",
                    $episode_url
                ),
                $this->resource->episode
            ),
            'url'      => $this->resource->url,
            'created'  => $this->resource->created,
        ];
    }
}
