<?php

namespace App\Http\Controllers;

use App\Http\Resources\CharacterResource;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    /**
     * @var \GuzzleHttp\Client
     */
    private Client $client;

    public function __construct()
    {
        $this->client = $this->client();
    }

    public function index(Request $request)
    {
        $page = (int) ($request->query('page') ?? 1);

        $api_response = $this->client->get('', [
            'query' => [
                'page' => $page,
                'name' => $request->query('name'),
                'status' => $request->query('status'),
                'species' => $request->query('species'),
                'type' => $request->query('type'),
                'gender' => $request->query('gender'),
            ]
        ]);

        $decoded_response = json_decode($api_response->getBody()->getContents());

        $characters = $decoded_response->results;
        $pagination = $decoded_response->info;

        return view('character.index', [
            'characters' => CharacterResource::collection($characters),
            'pagination' => [
                'total' => $pagination->count,
                'pages' => $pagination->pages,
                'page' => $page,
                'next' => min($pagination->pages, $page + 1),
                'prev' => max(1, $page - 1),
            ],
        ]);
    }

    public function show(int $id)
    {
        $api_response = $this->client->get("{$id}");

        $character = json_decode($api_response->getBody()->getContents());

        return view('character.show', [
            'character' => new CharacterResource($character),
        ]);
    }

    protected function client(): Client
    {
        return new Client([
            'base_uri' => 'https://rickandmortyapi.com/api/character/',
            'timeout'  => 1.0,
        ]);
    }
}
